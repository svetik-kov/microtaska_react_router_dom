import React from 'react';
import { Link, Navigate, NavLink, Outlet, Route, Routes, useNavigate } from "react-router-dom"
import {Error404} from "./components/pages/Error404";
import {Adidas} from "components/pages/Adidas";
import {Puma} from "components/pages/Puma";
import {Abibas} from "components/pages/Abibas";
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';
import { Model } from "components/pages/Model"
import { Prices } from "components/pages/Prices"
import { PATH } from "routes/router"


/*export const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    Prices:'/prices',
  Protected:'/ProtectedPage'

} as const;*/

function App() {
  const navigate=useNavigate()
  const navigateHandler=()=>{
    navigate(-1)
  }
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTED}>Protected Page</NavLink></S.NavWrapper>
                   {/* <a href={PATH.PAGE3}>page3 HTML</a>*/}
                </div>
                <div className={styles.content}>
                  <div className={styles.HorizontalNavigation}>
                  <Link className={styles.LinkLikeButton}  to={PATH.ADIDAS}> Главная страница (Adidas)</Link>
                 {/* <Link className={styles.LinkLikeButton} onClick={navigateHandler}  to={PATH.ADIDAS}> Назад</Link>*/}
                    <button className={styles.ButtonLikeLink} onClick={navigateHandler}>Назад </button>
                  </div>
                  <Outlet/>
                  {/*  <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.Prices} element={<Prices/>}/>
                        <Route path={'/:model/:id'} element={<Model/>}/>


                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

