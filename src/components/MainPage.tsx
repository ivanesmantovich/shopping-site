import React, {FC} from 'react'
import {Nav} from "./Nav";
import {ItemList} from "./ItemList";
import {ItemProps} from "../types/ItemProps";

const items:ItemProps[] = [
    {
        name: 'Apple Macbook Pro 14',
        description: 'New M1 Pro chip, super fast.',
        price: 2000,
        pictureLink: 'src/pictures/macbook14.jpg'
    },{
        name: 'Apple Macbook Pro 16',
        description: 'M1 Max, even faster.',
        price: 3500,
        pictureLink: 'src/pictures/macbook16.jpg'
    }
]

export const MainPage:FC = () => {
    return (
        <div className={'mainPage'}>
            <Nav/>
            <ItemList items={items}/>
        </div>
    )
}
