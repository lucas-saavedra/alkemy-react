import { NavLink } from 'react-router-dom'
const PageNotFound = ({ msg = 'Page not found', icon = "far fa-sad-cry" }) => {
    return (
        <div className="text-center">
            <h1 className='display-5 pt-3'>{msg}<i className={icon}></i></h1>
            <NavLink to={'/'}>
                <button className="btn mx-1">
                    <i className="fas fa-arrow-circle-left pe-3"></i>
                    Back to the menu
                </button>
            </NavLink>
        </div>
    )
}
export default PageNotFound
