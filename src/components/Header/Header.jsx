import h from './style/style.module.scss';
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
const navLinks = [
    {id:1,link:'Главная',to:""},
    {id:2,link:'О нас',to:"about"},
    {id:3,link:'Проекты',to:"projects"},
    {id:4,link:'Контакты',scrollTo:"contacts"},
]
export default function Header({contactsRef}){
    const [burger,setBurger] = useState(false)
    const currentUrl = useLocation().pathname.slice(1)
    const settingBurger = ()=>{
        setBurger(!burger)
        window.document.body.className = burger?"":"locked"
    }
    const toTop = ({preventDefault})=>{
        if (currentUrl == ""){
            preventDefault()
            window.scrollTo({top:0,left:0,behavior:"smooth"})
        }
    }
    return(
       <header className={h['header']}>
           <div className={h["header-container"]}>
               <Link className={h['header-logo']} onClick={()=>scrollTo({top:0,left:0,behavior:"smooth"})} to={''}>Архитектурное бюро</Link>
               <nav className={h['header-menu']}>
                   <button type={'button'} className={`${h['header-burger']} ${burger?h['active-btn']:""}`}  onClick={settingBurger}>
                       <span></span>
                       <span></span>
                       <span></span>
                   </button>
                   <ul className={`${h["header-list"]} ${burger?h['activeMenu']:""}`}>
                       {navLinks.map(({id,link,to,scrollTo})=>{
                           return <li key={id} className={`${h['header-item']}   ${currentUrl === to ? h["active-link"] : ""}`}>
                            <Link to={to} className={h['header-link']}>
                                {link}
                            </Link>
                           </li>
                       })}
                   </ul>
               </nav>
           </div>
       </header>
    )
}