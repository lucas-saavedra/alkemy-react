import { Button } from "react-bootstrap";
import { useState, useContext, useEffect } from 'react'
import { MenuContext } from '../../context/menuContext';
import { FaTrash } from "react-icons/fa";

const DeleteButton = (props) => {
    const { deleteFromMenu } = useContext(MenuContext);
    return (
        <>
            <Button variant="danger" onClick={() => deleteFromMenu(props.id)}>
                <FaTrash />
            </Button>
        </>
    )
}

export default DeleteButton