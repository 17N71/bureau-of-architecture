import ct from './styles/style.module.scss'
import contactBg  from './../views/Home/images/contacts.webp'
import {BsInstagram, BsTwitter, FaVk} from "react-icons/all.js";
import React, {useState} from "react";
const Contacts = ({contactsRef}) =>{
    const [valid, setValid] = useState(true)
    const [email,setEmail] = useState("")
     function mailing({target:{value}}){
        setEmail(value)
    }
    return(
        <>
            <div className={ct['contacts']} ref={contactsRef}>
                <h4 className={ct['contacts-title']}>Свяжитесь с нами</h4>
                <div className={ct["contacts-container"]} style={{backgroundImage:`url(${contactBg})`}}>
                        <div className={ct["contacts-wrapper"]}>
                            <div className={ct['contacts-info']}>
                                <h5>Архитектурное бюро</h5>
                                <address>ул. Арбат, 1а</address>
                                <span>Москва, Россия</span>
                                <a href="mailto:info@mysite.ru">info@mysite.ru</a>
                                <a href="tel:+74950000000">Телефон: +7 (495) 000-00-00</a>
                                <span>Факс: +7 (495) 000-00-00</span>
                            </div>
                            <div className={ct["contacts-social"]}>
                                <a href="#"><BsTwitter /></a>
                                <a href="#"><BsInstagram /></a>
                                <a href="#"><FaVk /></a>
                            </div>
                            <form className={ct['form']}>
                                <label htmlFor="subscribe-news">Подпишитесь на рассылку</label>
                                <input type="email" id="subscribe-news" className={`${valid ? "" :ct["invalid"]}`} value={email} onChange={mailing} onInvalid={()=>setValid(false)} required placeholder="Добавьте эл. почту*"/>
                                <button type="submit">ОК</button>
                            </form>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Contacts;