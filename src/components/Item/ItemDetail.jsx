
import AddtoMenuBtn from './AddtoMenuBtn';
import { MdOutlineAccessAlarm, MdCheckCircleOutline, MdOutlineHealthAndSafety } from "react-icons/md";
import { GiWheat } from "react-icons/gi";
import roundPrice from '../../utils/roundPrice.util';

const ItemDetail = ({ item }) => {
    const {
        image,
        glutenFree,
        pricePerServing,
        title, healthScore,
        readyInMinutes,
        vegan,
        vegetarian
    } = item;

    return (
        <>
            <div className="row" >
                <div className="col-md-6 col-xs-2">
                    <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                        <img src={image} style={{ objectFit: 'cover' }} className="w-100 h-100 rounded" alt="..."></img>
                    </div>
                </div>
                <div className="col-md-6 justify-content-start align-items-center">
                    <div>
                        <h3 className="h3">{title}</h3>
                        <p className="lead"><MdOutlineHealthAndSafety /> Healthscore {healthScore}%</p>
                        <p className="lead"><MdOutlineAccessAlarm /> Ready in {readyInMinutes} minutes</p>
                        <p className="lead"> {vegan && true && (<> <MdCheckCircleOutline /> Vegan</>)} </p>
                        <p className="lead"> {vegetarian && true && (<><MdCheckCircleOutline /> Vegetarian</>)} </p>
                        <p className="lead"> {glutenFree && true && (<><GiWheat /> Gluten free</>)} </p>
                        <h3 className>$ {roundPrice(pricePerServing)}  <span className="lead">per serving</span> </h3>
                        <AddtoMenuBtn item={item} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default ItemDetail
