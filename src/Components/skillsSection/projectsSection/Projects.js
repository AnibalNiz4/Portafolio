import styled from "styled-components";
import Title from "../title/Title";
import Popcorn from './ImgPorta1.png';
import Countrys from './ImgPorta2.png';
import Page1 from './ImgPorta3.png';
import OneProject from "./OneProject";
import Fade from 'react-reveal/Fade';

export default function Projects(){

    const FinalProjectContainer = styled.div`
        position: relative;
    `;

    const ProjectsBackground = styled.div`
        width: 100vw;
        height: 100%;
        position: absolute;
        background: #0B0014;
        z-index: -1;
    `;

    const ProjectContainer = styled.div`
        display: flex;
        flex-direction: column;
        padding: 200px 40px 100px 40px;
        max-width: 1440px;
        margin: 0 auto;
        position: relative;

        @media (max-width: 800px){
            padding: 50px 20px;
        }
    `;


    return(
        <FinalProjectContainer>
            <ProjectsBackground/>
            <ProjectContainer id='projects'>
                <Title title='Projectos' color='#EBEBEB'></Title>
                <Fade bottom>
                    <OneProject
                        ImgProject={Popcorn}
                        TitleProject='Without Popcorn'
                        TextProject='"Without Popcorn" es una app donde puedes visualizar información sobre películas o series de TV nuevas y populares, con alta información desde videos, comentarios de la comunidad y recomendaciones para que disfrutes tu paseo.'
                        Skill='ReactJs'
                        Order='0'
                        Right='0'
                        Margin='10px 0 0 20px'
                        Optional='API'
                        GitInfo='https://github.com/AnibalNiz4/Project-Without-Popcorn'
                        PageInfo='https://project-without-popcorn.vercel.app/'
                    ></OneProject>
                </Fade>
                <Fade bottom>
                    <OneProject
                        ImgProject={Countrys}
                        TitleProject='Where in the world?'
                        TextProject='"Where in the world?" es un sitio web para realizar búsquedas de los distintos países del mundo, pudiendo obtener resultados tales como: Población, capital, región, países vecinos, entre otros datos más.'
                        Skill='JS'
                        Order='2'
                        Right='100'
                        Margin='10px 20px 0 0'
                        Optional='API'
                        GitInfo='https://github.com/AnibalNiz4/Rest-countries-api'
                        PageInfo='https://rest-countries-api-sigma-virid.vercel.app/'
                    ></OneProject>
                </Fade>
                <Fade bottom>
                    <OneProject
                        ImgProject={Page1}
                        TitleProject='Manage landing page'
                        TextProject='"Manage Landing Page" es uno de los primeros proyectos que he realizado, un desafio de Fronted Mentor, donde pude aplicar mis habilidades de JavaScript y Sass, un modelo de una página simple pero efectiva.'
                        Skill='JS'
                        Order='0'
                        Right='0'
                        Margin='10px 0 0 20px'
                        Optional=''
                        GitInfo='https://github.com/AnibalNiz4/First_proyect_JS'
                        PageInfo='https://manage-landing-page-master-ten.vercel.app/'
                    ></OneProject>
                </Fade>
            </ProjectContainer>
        </FinalProjectContainer>


    )
}