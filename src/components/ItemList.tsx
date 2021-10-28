import React, {FC, useContext, useState} from 'react'
import {ItemType} from "../types/ItemType";
import {Item} from "./Item";
import {ItemListType} from "../types/ItemListType";
import {ItemProps} from "../types/ItemProps";
import {ShopContext} from "./ShopStore";

export const ItemContext = React.createContext<{cartItems: ItemProps[], addItem: (id: number) => void, removeItem: (id: number) => void} | undefined>(undefined);

export const ItemList:FC<ItemListType> = ({items}) => {
    const [cartItems, setCartItems] = useState<ItemProps[]>([])
    const context = useContext(ShopContext);

    const addItem = (id: number) => {
        for (let cartItem of cartItems) {
            if (cartItem.id === id) return
        }
        for (let item of items) {
            if (item.id === id) {
                setCartItems([
                    ...cartItems,
                    item
                ])
            }
        }
    }

    const removeItem = (id:number) => {
        let newCartItems = cartItems.filter(item => item.id !== id)
        setCartItems(newCartItems)
    }

    const value = {cartItems, addItem, removeItem}
    return context!.tab === 'items' ? (
        <div className={'itemList'}>
            <ItemContext.Provider value={value}>
                {items.map((item) => {
                    return <Item item={item}/>
                })}
            </ItemContext.Provider>
        </div>
    ) : (
        <div className={'itemList'}>
            <ItemContext.Provider value={value}>
                {cartItems.map((item) => {
                    return <Item item={item}/>
                })}
            </ItemContext.Provider>
        </div>
    )
    // return (
    //     <div className={'itemList'}>
    //         <ItemContext.Provider value={value}>
    //         {items.map((item) => {
    //             return <Item item={item}/>
    //         })}
    //         </ItemContext.Provider>
    //     </div>
    // )
}