import styled from 'styled-components';
import { keyframes } from 'styled-components';
import logo from './logo.svg';
import Skills from './Skills';
import Title from './title/Title';

export default function ReactLogo(){

    const ContainerReactLogo = styled.div`
        margin: 0 auto;
        height: 1200px;
        max-height: 1200px;
        background: #253D5B;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        @media (max-width: 800px){
            height: 450px;
        }
    `;
    
    const rotate = keyframes`
        from {
        transform: rotate(0deg);
        }
    
        to {
        transform: rotate(360deg);
        }
    `;

    const ImgReactLogo = styled.img`
        height: 400px;
        width: 400px;
        animation: ${rotate} 20s linear infinite;
        margin-top: 100px;

        @media (max-width: 800px){
            height: 150px;
            width: 150px;
            margin-top: 0;
        }
    `

    return(
        <ContainerReactLogo id='skills'>
            <Title title='Habilidades' color='#EBEBEB'></Title>
            <ImgReactLogo src={logo}></ImgReactLogo>
            <Skills></Skills>
        </ContainerReactLogo>
    )
}