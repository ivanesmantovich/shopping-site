import React, {FC, useContext, useState} from 'react';
import {ItemContext} from "./ItemList";
import {ShopContext} from "./ShopStore";
import {ItemProps} from "../types/ItemProps";
import {ItemType} from "../types/ItemType";

export const AmountButton:FC<ItemType> = ({item}) => {
    const [price, setPrice] = useState(item.price)
    const [amount, setAmount] = useState(1)

    const plus = function(this: ItemProps) {
        this.amount += 1;
        setAmount(amount + 1)
        setPrice(price + this.price)
    }

    const minus = function(this:ItemProps) {
        if (this.amount == 1) return
        this.amount -= 1;
        setAmount(amount - 1)
        setPrice(price - this.price)
    }

    return (
        <div className={'amountButton'}>
            <div className={'amountPrice'}>{`${price}$`}</div>
            <div className="amountAmount">
                <div onClick={() => {
                    minus.call(item)
                }} className="minus">-
                </div>
                <div className="amount">{amount}</div>
                <div onClick={() => {
                    plus.call(item)
                }} className="plus">+
                </div>
            </div>
        </div>
    )
}