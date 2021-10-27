import React, {FC} from 'react'

export const Nav:FC = () => {
    return <div className={'nav'}>
        <div className="items">
            <button>Items</button>
        </div>
        <div className="cart">
            <button>Cart</button>
        </div>
    </div>
}