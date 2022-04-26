
import { useContext } from "react";
import { ProgressBar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../../context/menuContext";

import MenuList from "./MenuList";
import { MdMenuBook } from "react-icons/md";


const Menu = () => {
    const { menuTotal, menuAmount, menu, menuHealthy, veganCounter, clearMenu } = useContext(MenuContext);

    return (
        <><div className="container" >
            {menuAmount() === 0 ?
                <>
                    <div className="col card-body text-center">
                        <h1 className="display-5">Your menu is empty</h1>
                        <NavLink to={'/search'}>
                            <button className="btn btn-primary mx-1">
                                <i className="fa fa-home pe-2"></i>
                                Search some recipes
                            </button>
                        </NavLink>
                    </div>
                </>

                :
                <>
                    <div className="d-flex justify-content-end align-items-center py-3" >
                        <Button onClick={() => clearMenu()}>
                            Clear Menu  <MdMenuBook size={'2em'} color={'white'} />
                        </Button>
                    </div>
                    <div className='row py-3  d-flex justify-content-center'>
                        <MenuList recipes={menu} fromMenu={true} />
                    </div>

                    <div className="row bg-white d-flex justify-content-end mb-3" style={{

                        position: 'sticky',
                        bottom: 0,
                        height: '100%'
                    }}>

                        <div className=" mb-3">
                            <p> HealthScore :</p> <ProgressBar now={menuHealthy()} label={`${menuHealthy()}%`} />
                        </div>
                        <div className="card-body">
                            <div className="d-flex">

                                <h4 className="m-0 p-1 ">Total: ${menuTotal()}</h4>
                                <p className="lead"> Max recipes per menu: 4</p>
                                <p className="lead"> Current amount: {menuAmount()}</p>
                            </div>
                        </div>

                    </div>
                </>
            }



        </div>
        </>

    )
}
export default Menu
