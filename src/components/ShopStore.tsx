import React, {FC, useState} from "react";

export const ShopContext = React.createContext<{tab: 'items' | 'cart', toggleTab: (selectedTab: 'items' | 'cart') => void} | undefined>(undefined);

export const ShopStore:FC = ({children}) => {
    const [tab, setTab] = useState<'items' | 'cart'>('items');

    const toggleTab = (selectedTab: 'items' | 'cart') => {
        setTab(selectedTab);
    }

    const value = {tab, toggleTab}
    return (
        <ShopContext.Provider value ={value}>
            {children}
        </ShopContext.Provider>
    )
}