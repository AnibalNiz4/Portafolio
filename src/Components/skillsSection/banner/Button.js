import styled from "styled-components";

export default function Button({text}){

    const ButtonCv = styled.button`
        box-sizing: border-box;
        font-family: 'Space Mono', monospace;
        font-size: 15px;
        padding: 7px;
        width: 180px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        display: flex;
        justify-content: center;
        text-align: center;
        background: #F05E47;
        color: #FCFFFC;
        margin-top: 20px;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);
        transition: all .1s linear;

        :hover{
            opacity: .9;
        }

        @media (max-width: 800px){
            font-size: 12px;
            padding: 5px;
            width: 120px;
        }
    `;

    return(
        <ButtonCv>{text}</ButtonCv>
    )

}