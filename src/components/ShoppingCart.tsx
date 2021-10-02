import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";

//props是组件对外的接口，state是组件对内的接口
//props用于组建间的数据传递，state用于组件内部的数据传递
//state是私有的，可以理解为是组件的私有属性
//如果要修改state,需使用setState()来修改：以对象赋值的方式来更新状态（更新组件状态，重新调用render函数，重新渲染页面）
//构建函数construstor是唯一可以初始化state的地方
//setState是异步操作

//props：properties本质上就是传入函数的参数，是父组件传递向子组件的数据
//对象一旦创建就不可改变。通过判断地址来确认对象有无经过修改（props只读属性）
interface Props {

}

//状态：例如下拉菜单的隐藏和出现两种状态
interface State {
    isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    //箭头函数 xxx = () =>{blahblahblah}
    //从更高级别中获取this的指代
    handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("咩系e.target", e.target)
        console.log("咩系e.currentTarget", e.currentTarget)
        if((e.target as HTMLElement).nodeName === "SPAN"){
            this.setState({ isOpen: !this.state.isOpen });
        }
    }

    //渲染html
    render() {
        return (
            <div className={styles.cartContainer}>
                <button className={styles.button}
                    onClick={(e) => this.handleClick(e)}
                >
                    <FiShoppingCart />
                    <span>shopping cart 2 (items)</span>
                    </button>
                <div className={styles.cartDropDown}
                    style={{
                        /* ⬇ 以对象赋值的方式来更新状态（更新组件状态，重新调用render函数，重新渲染页面） ⬇️*/
                        display: this.state.isOpen ? "block" : "none"
                    }}>
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        );
    }
}

//导出购物车
export default ShoppingCart;