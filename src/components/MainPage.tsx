import React, {FC, useContext, useEffect} from 'react'
import {Nav} from "./Nav";
import {ItemList} from "./ItemList";
import {ItemProps} from "../types/ItemProps";

const items:ItemProps[] = [
    {
        id: 1,
        name: 'Apple Macbook Pro 14',
        description: 'New M1 Pro chip, super fast.',
        price: 2000,
        amount: 1,
        pictureLink: 'src/pictures/macbook14.jpg'
    },{
        id: 2,
        name: 'Apple Macbook Pro 16',
        description: 'M1 Max, even faster.',
        price: 3500,
        amount: 1,
        pictureLink: 'src/pictures/macbook16.jpg'
    }
]

export const MainPage:FC = () => {

    useEffect(() => {
    }, [...items])

    return (
        <div className={'mainPage'}>
            <Nav/>
            <ItemList items={items}/>
        </div>
    )
}
