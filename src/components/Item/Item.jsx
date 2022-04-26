import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SearchModal from '../Search/Modal';

const Item = ({ prod }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const { id, title, image } = prod;
    return (

        <div className="col">
            <div className="card card h-100">
                <img src={image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className="h3">{title}</h5>
                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <p className="h5">
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-dark'>
                            Ver más
                            <i className='fa fa-eye'></i>
                        </button>
                    </p>

                    <SearchModal
                        id={id}
                        show={modalShow}
                        onHide={() => setModalShow(false)} />
                </div>

            </div>
        </div >
    )
}
export default Item
