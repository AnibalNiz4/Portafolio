import { useState } from "react";
import styled from "styled-components";
import TextP from "../textP/TextP";
import marca from './MarcaNav.svg';

export default function Nav(){
    
    const ContainerNav = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 0;
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 20px 40px;

        @media (max-width: 800px){
            padding: 20px;
        }
    `;

    const Marca = styled.img`
        height: 60px;
        width: 70px;
        object-fit: contain;
        opacity: .8;

        @media (max-width: 800px){
            height: 40px;
            width: 50px;
        }
    `

    const DivText = styled.div`
        display: flex;
    `;    

    const NavA = styled.a`
        @media (max-width: 800px){
            display: none;
        }
    `;

    return(
        <>
            <ContainerNav>
                <Marca src={marca}></Marca>
                <DivText>
                    <NavA href='#skills'><TextP colorP='#1C1D25' text='Habilidades'></TextP></NavA>
                    <NavA href='#projects'><TextP colorP='#1C1D25' text='Proyectos'></TextP></NavA>
                    <NavA href='#contacto'><TextP colorP='#1C1D25' text='Contacto'></TextP></NavA>
                </DivText>
            </ContainerNav>
        </>
    )

}