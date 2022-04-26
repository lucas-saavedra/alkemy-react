import Item from '../Item/Item'

import PageNotFound from '../PageNotFound/PageNotFound'
import MenuItem from './MenuItem'
const MenuList = ({ recipes }) => {
    return (
        <>
            {recipes.length === 0 ?
                (<PageNotFound msg={'Plese fill the input field'} />) :
                (
                    < div className="row mb-5 mt-3">
                        {
                            recipes.map((item, idx) =>
                                <MenuItem
                                    key={idx}
                                    item={item}
                                />)
                        }
                    </div >
                )
            }
        </>
    )
}

export default MenuList