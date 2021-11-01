import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Js from './JS.png';
import Css from './Css.png';
import Figma from './Figma.png';
import Sass from './Sass.png';
import StyleCom from './StyleCom.png';
import Html from './Html.png';

export default function Skills(){

    const rotateAnimation = keyframes`
        from {
        transform: rotate(360deg);
        }

        to {
        transform: rotate(0deg);
        }
    `;

    const rotateAnimation2 = keyframes`
        from {
        transform: rotate(320deg);
        }

        to {
        transform: rotate(321deg);
        }
    `;

    const ContainerSkills = styled.div`
        height: 600px;
        width: 600px;
        position: absolute;
        border-radius: 50%;
        animation: ${rotateAnimation} 40s linear infinite;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;

        @media (max-width: 800px){
            height: 200px;
            width: 200px;
            margin-top: 0;
        }
    `;

    const ImgSkill = styled.span`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        transform: ${props => props.sty ? `rotate(calc(60deg * ${props.sty}))` : ''};

        ::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 50%;
            box-shadow: 0 0 10px #00bcd4;
        }
    `;

    const ImgSkillWithin = styled.img`
        height: 150px;
        width: 150px;
        transform: ${props => props.sty ? `rotate(calc(60deg * -${props.sty}))` : ''};
        object-fit: cover;
        animation: ${rotateAnimation2} 40s linear infinite;

        
        @media (max-width: 800px){
            width: 50px;
            height: 50px;
        }
    `

    return(
        <ContainerSkills>
            <ImgSkill sty='1'>
                <ImgSkillWithin sty='1' src={Js}></ImgSkillWithin>
            </ImgSkill>
            <ImgSkill sty='2'>
                <ImgSkillWithin sty='2' src={StyleCom}></ImgSkillWithin>
            </ImgSkill>
            <ImgSkill sty='3'>
                <ImgSkillWithin sty='3' src={Html}></ImgSkillWithin>
            </ImgSkill>
            <ImgSkill sty='4'>
                <ImgSkillWithin sty='4' src={Figma}></ImgSkillWithin>
            </ImgSkill>
            <ImgSkill sty='5'>
                <ImgSkillWithin sty='5' src={Css}></ImgSkillWithin>
            </ImgSkill>
            <ImgSkill sty='6'>
                <ImgSkillWithin sty='6' src={Sass}></ImgSkillWithin>
            </ImgSkill>
        </ContainerSkills>
    )
}