

import { MdOutlineAccessAlarm, MdCheckCircleOutline, MdOutlineHealthAndSafety } from "react-icons/md";
import DeleteButton from "../Item/DeleteFromMenuBtn";

const MenuItem = ({ item }) => {
    const { id, image, pricePerServing, title, healthScore, readyInMinutes, vegan, vegetarian } = item;

    return (
        <>
            <div className="col-md-6 row p-3">
                <div className="col-md-6" >
                    <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                        <img src={image} style={{ objectFit: 'cover' }} className="w-100 h-100 rounded" alt="..."></img>
                    </div>
                </div>
                <div className="col d-flex justify-content-start align-items-center">
                    <div>
                        <h5 className="h5">{title}</h5>
                        <p><MdOutlineHealthAndSafety /> Healthscore {healthScore}%</p>
                        <p><MdOutlineAccessAlarm /> Ready in {readyInMinutes} minutes</p>
                        <p> {vegan && (<> <MdCheckCircleOutline /> Vegan</>)} </p>
                        <p> {vegetarian && (<><MdCheckCircleOutline /> Vegetarian</>)} </p>
                        <h3>$ {pricePerServing}</h3>
                    </div>
                    <div className=" col d-flex justify-content-end ">
                        <DeleteButton id={id} />
                    </div>
                </div>

            </div>


        </>

    )
}

export default MenuItem
