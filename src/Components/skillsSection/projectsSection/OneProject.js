import styled from "styled-components";
import IconGitHub from './IconGitHub.svg';
import Arrow from './Arrow.svg';

export default function OneProject({ImgProject, TitleProject, TextProject, Skill, Order, Right, Margin, Optional, GitInfo, PageInfo}){

    const OneProjectContainer = styled.div`
        margin: 50px 0 100px 0;
        display: flex;
        justify-content: space-between;

        @media (max-width: 1000px){
            flex-direction: column;
            align-items: center;
            margin: 30px 0;
        }
    `;

    const ImgContainer = styled.div`
        width: 730px;
        height: 550px;
        order: ${Order};

        @media (max-width: 1000px){
            width: 90%;
            height: auto;
            order: 0;
        }

        @media (max-width: 500px){
            height: 230px;
        }
    `;

    const Img = styled.img`
        height: 100%;
        width: 100%;
        object-fit: fill;
        opacity: .8;

        :hover{
            opacity: 1;
        }
    `;

    const ProjectsText = styled.div`
        display: flex;
        flex-direction: column;
        text-align: right;
        position: relative;        

        @media (max-width: 1000px){
            text-align: left;
            width: 100%;
            padding: 20px;
        }
    `;

    const H2Project = styled.h2`
        color: #EBEBEB;
        font-size: 28px;        

        @media (max-width: 1000px){
            font-size: 20px;
            margin: 20px 0 20px 20px;
        }
    `;

    const DivTextP = styled.div`
        width: 750px;
        height: 150px;
        background: #253D5B;
        right: ${Right};
        top: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;
        padding: 30px;
        position: absolute;        

        @media (max-width: 1000px){
            width: 100%;
            height: auto;
            position: relative;
            padding: 20px;
        }
    `;

    const TextInfo = styled.p`
        font-size: 18px;
        color: #EBEBEB;
        font-family: 'Space Mono', monospace;

        @media (max-width: 1000px){
            font-size: 15px;
        }
    `;

    const DivSkills = styled.div`
        display: flex;
        position: absolute;
        right: ${Right};
        top: 45%;

        @media (max-width: 1000px){
            position: relative;
            margin: 15px 0;
        }
    `;

    const SkillP = styled.p`
        font-family: 'Alegreya';
        font-size: 20px;
        color: #0B0014;
        margin: ${Margin};
        color: #EBEBEB;
        opacity: .5;

        @media (max-width: 1000px){
            font-size: 18px;
            margin-left: 20px;
        }
    `;

    const DivNetworks = styled.div`
        display: flex;
        position: absolute;
        right: ${Right};
        top: 55%;

        @media (max-width: 1000px){
            position: relative;
            order: 5;
            margin-left: 10px;
        }
    `;

    const IconImg = styled.img`
        width: 25px;
        height: 25px;
        object-fit: cover;
        margin: ${Margin};
        cursor: pointer;
        opacity: .7;

        :hover{
            opacity: 1;
        }

        @media (max-width: 1000px){
            height: 20px;
            width: 20px;
            margin: 10px;
        }
    `;

    return(
        <OneProjectContainer>
            <ImgContainer>
                <Img src={ImgProject}></Img>
            </ImgContainer>
            <ProjectsText>
                <H2Project>{TitleProject}</H2Project>
                <DivTextP>
                    <TextInfo>{TextProject}</TextInfo>
                </DivTextP>
                <DivNetworks>
                    <a href={GitInfo} target='_blank'><IconImg src={IconGitHub}></IconImg></a>
                    <a href={PageInfo} target='_blank'><IconImg src={Arrow}></IconImg></a>
                </DivNetworks>
                <DivSkills>
                    <SkillP><i>{Skill}</i></SkillP>
                    <SkillP><i>Sass</i></SkillP>
                    <SkillP><i>{Optional}</i></SkillP>
                </DivSkills>
            </ProjectsText>
        </OneProjectContainer>
    )
}