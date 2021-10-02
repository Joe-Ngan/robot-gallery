import React, { useState, useEffect } from 'react';
import logo from "./assets/images/logo.svg";//svg即是图片资源相关
// import './App.css'; React的模块化优势，可以import css中的模块（模块化命名规范.module.css)
import styles from "./App.module.css";

import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';

// const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />" //React会自动对此攻击编译为字符串
// const jsHacked = "javascript: alert('Hacked!');" //注入攻击

interface Props {

}

interface State {
  robotGallery: any; //前端强行定义API数据类型，违反前后端分离原则
  count: number;
}

const App: React.FC = (props) => { //一个名为app的函数式组件：返回类型为jsx元素类型的函数（如下图return（）显示）（鼠标停留获取更多信息）

  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    document.title = `这个网站被人老点${count}次`
  }, [count])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      
        const repsonses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await repsonses.json();
        setRobotGallery(data);
      
      setLoading(false);
    }

    fetchData()

  }, [])//第二个参数为空数组，模拟componentDidMount；没有第二个参数，则在每次渲染中执行，模拟componentDidUpdate



  // //生命周期第一阶段：初始化
  // //1. 初始化组件 state
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     robotGallery: [],
  //     count: 0
  //   };
  // }

  //2.在组件创建好dom元素以后，挂载进页面的时候调用
  // componentDidMount(){
  //   fetch("https://jsonplaceholder.typicode.com/users")//fetch返回的不是数据而是promise
  //   .then(response => response.json())//response.json也是promise
  //   .then(data => this.setState({robotGallery:data}))
  // }

  // //生命周期第二阶段：更新
  // //1.在组件接收到一个新的prop的时候被调用。(被废弃)
  // // componentWillReceiveProps
  // // state getDerivedStateFromProps(nextProps, prevState){}
  // // shouldComponentUpdate(nextProps, nextState){
  // //   return nextState.some !== this.state.some
  // // }
  // // 组件更新后调用
  // componentDidUpdate(){}

  // //生命周期第三阶段：销毁
  // //组件销毁后调用，回收监听与事件，避免内存泄漏
  // //可以当作析构函数 deconstructor 来使用
  // componentWillUnmount(){}




  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>Robotic robot online shopping hub</h1>
      </div>
      <button onClick={() => {
        setCount(count + 1)
      }}//异步处理
      >Click</button>
      <span>count: {count}</span>

            /*购物车组件：可以直接以尖括号形式添加 */
      <ShoppingCart />
      {(!error || error!=="") && <div>网站出错：{error}</div>}
      {!loading ?
        <div className={styles.robotList}>
          {robotGallery.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name} />
          ))}
        </div>
        : <h2>loading 加载中</h2>
      }
    </div>
  );
}


export default App; //最终输出的app函数
