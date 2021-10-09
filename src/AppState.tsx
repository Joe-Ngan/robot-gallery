//创建全局state和context component
import React, { useState } from 'react'

//给contextvalue定义基本类型
interface AppStateValue {
    username: string;
    shoppingCart: { items: {id: number, name: string}[] }//方括号表示列表

}

const defaultContextValue : AppStateValue ={
    username: "Joe",
    shoppingCart: { items: [] }
  };
  
export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined)

export const AppStateProvider: React.FC = (props) => {
    const [state, setState] = useState(defaultContextValue)

    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    );
};