import React from 'react'
import Item from '../Item/Item'
import PageNotFound from '../PageNotFound/PageNotFound'

const ItemList = ({ recipes }) => {
    return (
        <>
            {recipes.length === 0 ?
                (<PageNotFound msg={'Items not found'} />) :
                (
                    < div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 g-4  mb-5 mt-3">
                        {
                            recipes.map((prod, idx) =>
                                <Item
                                    key={idx}
                                    prod={prod}
                                />)
                        }
                    </div >
                )
            }
        </>
    )
}

export default ItemList
