import { createContext, useState, useEffect } from "react";
import roundPrice from "../utils/roundPrice.util";
export const MenuContext = createContext();

export const MenuProvider = (props) => {
    const [menu, setMenu] = useState([]);
    const [veganCounter, setVeganCounter] = useState(false);
    const [otherCounter, setOtherCounter] = useState(false);
    const [isMenuFull, setIsMenuFull] = useState(false);

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            setVeganCounter((menu.filter((item) => item.vegan === true)).length === 2 && true);
            setOtherCounter((menu.filter((item) => item.vegan === false)).length === 2 && true);
        }
        return function cleanup() {
            mounted = false
        }

    }, [menu]);

    const addToMenu = (item) => {
        const priceRounded = roundPrice(item.pricePerServing)
        setMenu([...menu, { ...item, pricePerServing: priceRounded }])
    }
    const clearMenu = () => {
        setMenu([]);
    }
    const deleteFromMenu = (id) => {
        const tempMenu = [...menu];
        const idx = tempMenu.findIndex((item) => item.id === id);
        const item = tempMenu.find((item) => item.id === id);
        tempMenu.splice(idx, 1);
        if (item.vegan) {
            setVeganCounter(veganCounter - 1)
        } else {

        }
        setMenu([...tempMenu])
    }

    /*    const addToCart = (item, quantity) => {
           let temp = cart;
     
           const isInCartIndex = itemId => {
               return cart.indexOf(cart.find(({ item: itemCart }) => itemCart.id === itemId))
           };
     
           if (isInCartIndex(item.id) !== -1) {
               temp[isInCartIndex(item.id)].quantity += quantity;
           }
           else {
               temp.push({ item, quantity });
           }
           setCart([...temp])
       } */

    const menuTotal = () =>
        (menu.map((item) => item.pricePerServing))
            .reduce(((acc, value) => { return acc + value }), 0)

    const menuHealthy = () => {
        const healthScoreTotal = (menu.map((item) => item.healthScore))
            .reduce(((acc, value) => { return acc + value }), 0)
        return Number.parseInt(healthScoreTotal / menu.length);
    }

    const menuAmount = () => menu.length


    return (
        <MenuContext.Provider value={{ isMenuFull, clearMenu, menuHealthy, addToMenu, deleteFromMenu, menu, menuTotal, menuAmount, veganCounter, otherCounter }}>
            {props.children}
        </MenuContext.Provider>
    )
}