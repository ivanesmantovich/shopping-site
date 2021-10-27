import React, {FC} from 'react'
import {ItemType} from "../types/ItemType";
import {Item} from "./Item";
import {ItemListType} from "../types/ItemListType";


export const ItemList:FC<ItemListType> = ({items}) => {
    return (
        <div className={'itemList'}>
            {items.map((item) => {
                return <Item item={item}/>
            })}
        </div>
    )
}