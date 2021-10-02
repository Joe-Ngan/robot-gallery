import React, { useContext } from "react";
import styles from './Robot.module.css'
import { appContext } from "../index";

interface RobotProps {//组件的props(也是范型类型)
    id: number;
    name: string;
    email: string;
}

const Robot : React.FC<RobotProps> = ({ id, name, email }) => {//组件间的数据传递，通过props来完成
    const value = useContext(appContext);
    return (
        <div className={styles.cardContainer}>
                <img alt="robot" src={`https://robohash.org/r${id}`}/>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>作者：{value.username}</p>
            </div>
    );
};

export default Robot;