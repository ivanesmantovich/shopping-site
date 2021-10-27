import React, {FC} from 'react'
import {ItemType} from "../types/ItemType";

export const Item:FC<ItemType> = ({item}) => {
    return (
        <div className={'item'}>
            <div className="picture" style={{backgroundImage: `url(${item.pictureLink})`}}></div>
            <div className="name">{item.name}</div>
            <div className="description">{item.description}</div>
            <div className="price">{item.price}</div>
        </div>
    )
}