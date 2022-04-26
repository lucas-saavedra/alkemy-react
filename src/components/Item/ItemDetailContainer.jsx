import { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";

const ItemDetailContainer = ({ id }) => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let mounted = true;
        if (mounted) {

            axios.get(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=4926cbbf15ee43678820303661e20f94`)
                .then(({ data }) => setItem(data))
                .catch(err => console.log(err))
                .then(() => setLoading(false))

        }
        return function cleanup() {
            mounted = false
        }
    }, [id])

    return (
        <div>  {loading ? (<Loader />
        ) : (

            <ItemDetail item={item} />
        )
        }
        </div>
    )
}

export default ItemDetailContainer
