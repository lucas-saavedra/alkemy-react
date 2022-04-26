import { Button } from "react-bootstrap"
import { useState, useContext, useEffect } from 'react'
import { MenuContext } from '../../context/menuContext'
import { NavLink, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const AddtoMenuBtn = ({ item }) => {
    let navigate = useNavigate();
    const [isNonVeganFull, setIsNonVeganFull] = useState(false);
    const [isVeganFull, setIsVeganFull] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const { vegan } = item;
    const { addToMenu, veganCounter, otherCounter } = useContext(MenuContext);
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            console.log(vegan, veganCounter);
            if (vegan) {
                setDisabled(vegan && veganCounter && true)
            }
            else {
                setDisabled(!vegan && otherCounter & true)
            }


        }
        return function cleanup() {
            mounted = false
        }

    }, [veganCounter, otherCounter, vegan]);

    const addMenu = (item) => {
        addToMenu(item)
        MySwal.fire({
            title: 'Added!',
            text: 'What you want to do now?',
            icon: 'success',
            showDenyButton: true,
            confirmButtonText: 'Add another',
            denyButtonText: `Go to Menu`,
            confirmButtonColor: '#3085d6',
            denyButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {

            } else if (result.isDenied) {
                navigate('/')
            }
        })
    }

    return (
        <>
            <Button onClick={() => addMenu(item)} disabled={disabled && true} >
                Add to menu
            </Button>
            <div className="pt-3 d-flex">
                <p className="alert alert-primary p-2" role="alert">
                    {!vegan && disabled && 'Only 2 non-vegan recipes per menu.'}
                    {vegan && disabled && 'Only 2 vegan recipes per menu. '}
                </p>
            </div >
        </>
    )
}

export default AddtoMenuBtn