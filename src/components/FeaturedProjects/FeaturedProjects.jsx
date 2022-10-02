import item1 from  '../views/Home/images/1.webp';
import item2 from  '../views/Home/images/2.webp';
import item3 from  '../views/Home/images/3.webp';
import item4 from  '../views/Home/images/4.webp';
import item5 from  '../views/Home/images/5.webp';
const imagesLinks = [
    {
        id:1,
        src:item1,
    },
    {
        id:2,
        src:item2,
    },

    {
        id:3,
        src:item3,
    },
    {
        id:4,
        src:item4,
    },
    {
        id:5,
        src:item5,
    },
    ]
import {Link} from "react-router-dom";
import { BsArrowRight} from "react-icons/all.js";
import fp from  "./styles/style.module.scss"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import '@splidejs/react-splide/css/core';
const FeaturedProjects = () =>{
    const options = {
        wheel    : true,
        direction:"ltr",
        wheelSleep:750,
        arrows:false,
        perPage: 1,
        releaseWheel:true,
        type:"slide",
        fixedWidth:"100vw",
        slideFocus:true,
        focus:"center",
        perMove: 1,
        autoHeight:true,
        pagination:false,
        drag:false,
    }
    return(
        <div className={fp['fp-container']}>
            <h2 className={fp['fp-title']}>Избранные проекты</h2>
            <Splide options={options} className={fp['projects-container']}>
                <SplideSlide className={fp['project-item']}>
                    <div className={`${fp['card']} ${fp["card-primary"]}`}>
                        <div className={fp["card-message"]}>
                            <h3 className={fp['message-title']}>Проект 1</h3>
                            <p className={fp['message-desc']}>Это текст. Кликните дважды, чтобы отредактировать. Расскажите посетителям сайта о себе.</p>
                            <Link to={`info/${imagesLinks[0].id}`}><BsArrowRight /> </Link>
                        </div>
                        <Link to={`info/${imagesLinks[0].id}`}><img src={imagesLinks[0].src} alt="project 1" title="project 1"/></Link>
                    </div>
                    <div className={`${fp['card']} ${fp["card-primary"]}`}>
                        <Link to={`info/${imagesLinks[1].id}`}><img src={imagesLinks[1].src} alt="project 2" title="project 2"/></Link>
                        <div className={fp["card-message"]}>
                            <h3 className={fp['message-title']}>Проект 2</h3>
                            <p className={fp['message-desc']}>Это текст. Кликните дважды, чтобы отредактировать. Расскажите посетителям сайта о себе.</p>
                            <Link to={`info/${imagesLinks[1].id}`}><BsArrowRight /> </Link>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide className={fp['project-item']}>
                    <div className={`${fp['card-large']}`}>
                        <Link to={`info/${imagesLinks[2].id}`}> <img src={imagesLinks[2].src} alt="project 3" title="project 3"/></Link>
                        <div className={fp["card-message"]}>
                            <h3 className={fp['message-title']}>Проект 3</h3>
                            <p className={fp['message-desc']}>Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе.</p>
                            <p className={fp['message-desc']}>Здесь будет удачно смотреться текст о вашей компании и услугах. Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам. Расскажите интересную историю, например, как вам в голову пришла идея собственного дела, и объясните, в чем заключается ваше преимущество перед конкурентами. Приводите увлекательные факты и цифры.</p>
                            <Link to={`info/${imagesLinks[2].id}`}><BsArrowRight /> </Link>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide className={fp['project-item']}>
                    <div className={fp['card-rotate-large']}>
                        <div className={fp["card-message"]}>
                            <h3 className={fp['message-title']}>Проект 4</h3>
                            <p className={fp['message-desc']}>Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе.</p>
                            <p className={fp['message-desc']}>Здесь будет удачно смотреться текст о вашей компании и услугах. Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам. Расскажите интересную историю, например, как вам в голову пришла идея собственного дела, и объясните, в чем заключается ваше преимущество перед конкурентами. Приводите увлекательные факты и цифры.</p>
                            <Link to={`info/${imagesLinks[3].id}`}><BsArrowRight /> </Link>
                        </div>
                        <Link to={`info/${imagesLinks[3].id}`}><img src={imagesLinks[3].src} alt="project 4" title="project 4"/></Link>
                    </div>
                </SplideSlide>
                <SplideSlide className={fp['project-item']}>
                    <div className={fp['card-xxl']}>
                        <Link to={`info/${imagesLinks[4].id}`}> <img src={imagesLinks[4].src} alt="project 5" title="project 5"/></Link>
                        <div className={fp["card-message"]}>
                            <h3 className={fp['message-title']}>Проект 5</h3>
                            <p className={fp['message-desc']}>Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Здесь вы можете рассказать посетителям подробнее о себе.</p>
                            <Link to={`info/${imagesLinks[4].id}`}><BsArrowRight /> </Link>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>

    )

}
export default FeaturedProjects;