import React, { useContext } from "react";
import styles from './Robot.module.css'
import { appContext, appSetStateContext } from "../AppState";

interface RobotProps {//组件的props(也是范型类型)
    id: number;
    name: string;
    email: string;
}

const Robot : React.FC<RobotProps> = ({ id, name, email }) => {//组件间的数据传递，通过props来完成
    const value = useContext(appContext);
    const setState = useContext(appSetStateContext);
    const addToCart = () =>{
        if(setState) { //有undefined的可能性
            setState(state => {
                return {
                    ...state,
                    shoppingCart:{
                        items: [...state.shoppingCart.items, {id, name}]
                    }
                }
            })
        }
    }
    return (
        <div className={styles.cardContainer}>
            <img alt="robot" src={`https://robohash.org/r${id}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者：{value.username}</p>
            <button onClick={addToCart}>purchase</button>
        </div>
    );
};

export default Robot;