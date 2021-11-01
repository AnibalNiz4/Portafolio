import styled from 'styled-components';
import TextP from '../textP/TextP';
import LogoFooter from './LogoFooter.svg';

export default function Footer(){

    const FooterContainer = styled.div`
        width: 100vw;
        height: 300px;
        background: #1C1D25;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media (max-width: 800px){
            height: 150px;
        }
    `;

    const OrangeLogo = styled.img`
        height: 100px;
        width: 100px;
        object-fit: cover;

        @media (max-width: 800px){
            height: 50px;
            width: 50px;
        }
    `;

    const TopBanner = styled.p`
        color: #EBEBEB;
        position: absolute;
        font-size: 18px;
        left: 30px;
        opacity: 0;

        @media (max-width: 800px){
            font-size: 15px;
        }
    `;

    const DivLogo = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;

        :hover{

            p{
                transition: all .2s linear;
                opacity: 1;
                left: 120px;

                @media (max-width: 800px){
                    left: 80px;
                }
            }
        }
    `;

    const DivNetworks = styled.div`
        display: flex;
        margin-top: 30px;

        @media (max-width: 800px){
            margin-top: 20px;
        }
    `;

    return(
        <FooterContainer>
            <a href='#beginning'>
                <DivLogo>
                    <OrangeLogo src={LogoFooter}></OrangeLogo>
                    <TopBanner>Subir</TopBanner>
                </DivLogo>
            </a>
            <DivNetworks>
                <a href='https://github.com/AnibalNiz4' target='_blank'><TextP colorP='#EBEBEB' text='GitHub'></TextP></a>
                <a href='https://www.linkedin.com/in/anibal-niz-56a3a2217/' target='_blank'><TextP colorP='#EBEBEB' text='LinkedIn' colorText='#EBEBEB'></TextP></a>
            </DivNetworks>
        </FooterContainer>
    )


}