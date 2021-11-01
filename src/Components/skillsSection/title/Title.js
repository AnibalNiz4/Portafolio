import styled from 'styled-components';
import Diamond from './Diamond.png';

export default function Title({title, color}){

    const ContainerTittle = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0 auto;
        position: absolute;
        top: 0;
        margin-top: 50px;
        width: 100%;        

        @media (max-width: 800px){
            margin-top: 15px;
        }
    `;

    const TittleSection = styled.h2`
        font-family: 'Space Mono', monospace;
        font-weight: 500;
        font-size: 35px;
        color: ${color};

        @media (max-width: 800px){
            font-size: 22px;
            margin: 0 10px;
        }
    `;

    const DiamondImg = styled.img`
        height: 30px;
        width: 30px;
        object-fit: contain;

        @media (max-width: 800px){
            display: none;
        }
    `
    const Line = styled.span`
        width: 200px;
        height: 2px;
        background: #A9A071;
        margin: 0 20px;

        @media (max-width: 800px){
            margin: 0;
            width: 10%;
        }
    `


    return(
        <ContainerTittle>
            <Line></Line>
            <DiamondImg src={Diamond}></DiamondImg>
            <Line></Line>
            <TittleSection>{title}</TittleSection>
            <Line></Line>
            <DiamondImg src={Diamond}></DiamondImg>
            <Line></Line>
        </ContainerTittle>
    )

}