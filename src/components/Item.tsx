import React, {FC, useContext} from 'react'
import {ItemType} from "../types/ItemType";
import {AddButton} from "./AddButton";
import {ShopContext} from "./ShopStore";
import {RemoveButton} from "./RemoveButton";

export const Item:FC<ItemType> = ({item}) => {
    const context = useContext(ShopContext)
    return (
        <div className={'item'}>
            <div className="picture" style={{backgroundImage: `url(${item.pictureLink})`}}></div>
            <div className="name">{item.name}</div>
            <div className="description">{item.description}</div>
            <div className="price">{`${item.price}$`}</div>
            {context!.tab === 'items' ? <AddButton item={item}/> : <RemoveButton item={item}/>}
        </div>
    )
}