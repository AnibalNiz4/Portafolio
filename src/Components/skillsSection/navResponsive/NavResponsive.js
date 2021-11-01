import { useState } from "react";
import styled from "styled-components";
import './navResponsive.css';
import GitHub from './GitHub.png';
import LinkedIn from './LinkedIn.png';

export default function NavResponsive(){

    const [topBar, setTopBar] = useState(true);

    const showTopbar = () => setTopBar(!topBar);
    
    const HamburgerNav = styled.div`
        height: 15px;
        justify-content: space-between;
        flex-direction: column;
        display: none;
        position: absolute;
        margin: 30px 20px;
        right: 0;
        cursor: pointer;
        z-index: 10001111110;

        @media (max-width: 800px){
            display: flex;
        }
    `;

    const DivH3 = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const H3Responsive = styled.h3`
        color: #fff;
        font-size: 30px;
        margin: 15px 0;
        position: relative;
        cursor: pointer;
        transition: all .2s linear;
        text-shadow: 3px 3px 2px rgba(0, 0, 0, .5);

        :hover{
            transform: scale(1.02);
        }
    `;

    const DivNetworksResponsive = styled.div`
        display: flex;
        position: absolute;
        bottom: 0;
    `;

    const IconImgNetwork = styled.img`
        height: 30px;
        width: 30px;
        margin: 20px 10px;
        object-fit: cover;
        cursor: pointer;

        :hover{
            transform: scale(1.08);
        }
    `;

    return(
        <>
            <HamburgerNav onClick={showTopbar}>
                <span className={topBar ? "SpanHamburger" : "SpanHamburger white"}></span>
                <span className={topBar ? "SpanHamburger" : "SpanHamburger white"}></span>
                <span className={topBar ? "SpanHamburger" : "SpanHamburger white"}></span>
            </HamburgerNav>

            <div className={topBar ? "NavResponsiveContainer" : "NavResponsiveContainer active"}>
                <DivH3>
                    <a onClick={showTopbar} href='#skills'><H3Responsive>Habilidades</H3Responsive></a>
                    <a onClick={showTopbar} href='#projects'><H3Responsive>Proyectos</H3Responsive></a>
                    <a onClick={showTopbar} href='#contacto'><H3Responsive>Contacto</H3Responsive></a>
                </DivH3>
                <DivNetworksResponsive>
                    <a onClick={showTopbar} href='https://github.com/AnibalNiz4' target='_blank' ><IconImgNetwork src={GitHub}/></a>
                    <a onClick={showTopbar} href='https://www.linkedin.com/in/anibal-niz-56a3a2217/' target='_blank' ><IconImgNetwork src={LinkedIn}/></a>
                </DivNetworksResponsive>
            </div>
        </>


    )
}