import styled from "styled-components";
import Nav from "./Nav";
import MarcaBack from './MarcaBackground.svg';
import GitHub from './github.svg';
import LinkedIn from './linkedin.svg';
import Button from "./Button";

export default function Banner(){

    const BackgroundBanner = styled.div`
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: #EBEBEB;
        z-index: -1;
    `;

    const ContainerBanner = styled.div`
        height: 100vh;
        background: url(${MarcaBack}) no-repeat center;
        display: flex;
        align-items: center;
        margin: 0 auto;
        position: relative;
        max-width: 1440px;
        max-height: 1200px;

        @media (max-width: 800px){
            background-size: 50%;
            max-height: 500px;
        }
    `;

    const ContainerInfo = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 15%;
    `;

    const H1name = styled.h1`
        font-size: 60px;
        font-family: 'Space Mono', monospace;
        color: #0B0014;

        @media (max-width: 800px){
            font-size: 35px;
        }
    `;

    const Pinfo = styled.p`
        font-family: 'Alegreya';
        font-size: 30px;
        color: #0B0014;

        @media (max-width: 800px){
            font-size: 20px;
        }
    `;

    const ContainerIcons = styled.div`
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        margin-right: 40px;

        @media (max-width: 800px){
            display: none;
        }
    `;

    const IconImg = styled.img`
        height: 50px;
        width: 50px;
        margin-top: 20px;
        object-fit: cover;
        opacity: .7;
        cursor: pointer;

        :hover{
            opacity: 1;
        }
    `;

    return(
        <>
            <BackgroundBanner id='beginning'></BackgroundBanner>
            <ContainerBanner>
                <Nav></Nav>
                <ContainerInfo>
                    <H1name>Anibal Niz</H1name>
                    <Pinfo><i>Desarrollador front-end</i></Pinfo>
                    <a href='./pdf' target='_blank'><Button text='Descargar CV'></Button></a>
                </ContainerInfo>
                <ContainerIcons>
                    <a href='https://github.com/AnibalNiz4' target='_blank' ><IconImg src={GitHub}/></a>
                    <a href='https://www.linkedin.com/in/anibal-niz-56a3a2217/' target='_blank' ><IconImg src={LinkedIn}/></a>
                </ContainerIcons>
            </ContainerBanner>
        </>
    )

}