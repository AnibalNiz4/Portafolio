import styled from "styled-components";

export default function TextP({text, colorP}){

    const Text = styled.p`
        font-size: 20px;
        color: ${colorP};
        font-family: 'Space Mono', monospace;
        font-weight: 600;
        margin: 0 10px;
        cursor: pointer;
        position: relative;
        
        ::after{
            content: '';
            position: absolute;
            transition: all .2s linear;
            width: 0;
            height: 2px;
            left: 0;
            bottom: 0;
            background: #F05E47;
        }

        :hover{
            ::after{
                width: 100%;
            }
        }  

        @media (max-width: 800px){
            font-size: 15px;
        }
    `;

    return(
        <Text>{text}</Text>
    )
}