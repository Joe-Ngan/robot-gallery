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
    username: string;
}

interface State {
  robotGallery: any; //前端强行定义API数据类型，违反前后端分离原则
  count: number;
}

const App: React.FC<Props> = (props) => { //一个名为app的函数式组件：返回类型为jsx元素类型的函数（如下图return（）显示）（鼠标停留获取更多信息）

  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    document.title = `这个网站被人老点${count}次`
  }, [count])

  useEffect(() => {
    const fetchData = async ()=>{
      setLoading(true)
        const repsonses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await repsonses.json();
        setRobotGallery(data);
      setLoading(false)
    };
    fetchData();
  }, []);//第二个参数为空数组，模拟componentDidMount；没有第二个参数，则在每次渲染中执行，模拟componentDidUpdate


  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>Robotic robot online shopping hub</h1>
      </div>
      <h2>{props.username}</h2>
      <button onClick={() => {
        setCount(count + 1)
      }}//异步处理
      >Click to be rich</button>
      <span>uh you man! {count}</span>
      <ShoppingCart />
      {/* {(!error || error!=="") && <div>网站出错：{error}</div>} */}
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