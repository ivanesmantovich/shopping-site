import React, {FC, useContext} from 'react'
import {ItemType} from "../types/ItemType";
import {ItemContext} from "./ItemList";

export const RemoveButton:FC<ItemType> = ({item}) => {
    const context = useContext(ItemContext)
    return (
        <div onClick={(event:React.MouseEvent) => {
            context!.removeItem(item.id);
        }} className={'removeButton'}>Remove</div>
    )
}