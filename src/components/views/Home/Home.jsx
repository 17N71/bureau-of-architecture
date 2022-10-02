import React, {useEffect, useState} from 'react';
import h from './styles/style.module.scss'
import HomeVideo from "../../../assets/Home.mp4"
import FeaturedProjects from "../../FeaturedProjects/FeaturedProjects.jsx";
import Contacts from "../../Contacts/Contacts.jsx";
import {BsArrowUp} from "react-icons/all.js";
function Home({contactsRef}) {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() =>  {
        window.addEventListener('scroll', handleScroll, { passive: true });
        let scrolledP = window.pageYOffset * -.1
            document.documentElement.style.setProperty('--scrolled-p',`${(scrolledP * -2) / 2}%`)
            document.documentElement.style.setProperty('--scrolled-t',`${-scrolledP *  1}%`)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };
    return (
        <>
        <section className={h['video-section']} >
                <h1 className={h['video-title']}>AB</h1>
                <div className={h['video-video']}>
                    <video width={"100%"} style={{objectFit:"cover", height:"100vh"}} src={HomeVideo} muted={true}  loop={true} autoPlay />
                </div>
        </section>
        <FeaturedProjects />
        <Contacts contactsRef={contactsRef} />
        <button type="button" className={h['to-top']} onClick={()=>scrollTo({top:0,left:0,behavior:"smooth"})}><BsArrowUp /><span>Наверх</span></button>
        </>
  );
}
export default Home;