import React, {FC, useContext} from 'react'
import {ShopContext} from "./ShopStore";



export const Nav:FC = () => {
    const context = useContext(ShopContext)
    return <div className={'nav'}>
        <div onClick={() => {
            if (context === undefined) throw new Error('Context must be defined')
            context.toggleTab('items')
        }} className={`items ${context!.tab === 'items' ? 'underlined' : ''}`}>
            Items
        </div>
        <div onClick={() => {
            if (context === undefined) throw new Error('Context must be defined')
            context.toggleTab('cart')
        }
        } className={`cart ${context!.tab === 'cart' ? 'underlined' : ''}`}>
            Cart
        </div>
    </div>
}