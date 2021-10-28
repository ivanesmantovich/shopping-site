import React, {FC, useContext} from 'react'
import {ItemType} from "../types/ItemType";
import {ItemContext} from "./ItemList";

const handleAdd = (event:React.MouseEvent) => {
    const target = event.target as HTMLDivElement;
    if (target) {
        target.classList.add('added');
        target.textContent = '✔'
    }
    setTimeout(() => {
        if (target) {
            target.classList.remove('added')
            target.textContent = 'Add to Cart'
        }
    }, 1500)
}

export const AddButton:FC<ItemType> = ({item}) => {
    const context = useContext(ItemContext)
    return (
        <div onClick={(event:React.MouseEvent) => {
            context!.addItem(item.id);
            handleAdd(event)
        }} className={'addButton'}>Add to Cart</div>
    )
}