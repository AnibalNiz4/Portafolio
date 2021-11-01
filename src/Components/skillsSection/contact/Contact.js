import styled from "styled-components"
import Button from "../banner/Button";
import emailjs from 'emailjs-com';

export default function Contact(){

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('mailMessage', 'template_jki46fn', e.target, 'user_PY3fbY67HISobXpRn0uWz')
          .then((result) => {
              alert('Mensaje enviado con éxito!!! =)');
          }, (error) => {
              alert(error.message);
          });
          e.target.reset();
    };

    const ContactContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        max-height: 1000px;
        background: #0B0014;
        padding-bottom: 150px;

        @media (max-width: 1000px){
            flex-direction: column;
            height: 1000px;
        }
    `;

    const AboutMe = styled.div`
        width: 500px;
        height: 620px;
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, .95);
        padding: 80px 60px;

        @media (max-width: 800px){
            width: 80%;
            max-width: 500px;
            padding: 20px;
        }
    `;

    const AboutMeTitle = styled.h3`
        color: #D44D5C;
        font-size: 24px;
        font-weight: 800;

        @media (max-width: 1000px){
            font-size: 20px;
        }
    `;

    const DeveloperText = styled.p`
        font-family: 'Alegreya', serif;
        font-size: ${props => props.Size || "18px"};
        color: ${props => props.Color || "#0B0014"};
        margin: 5px 0;
        
        @media (max-width: 1000px){
            font-size: 17px;
        }
    `; 

    const OrangeSpan = styled.span`
        color: #F05E47;
        font-weight: 500;
    `;

    const FormContainer = styled.div`
        width: 500px;
        height: 620px;
        display: flex;
        flex-direction: column;
        background: #253D5B;
        padding: 80px 60px;

        @media (max-width: 1000px){
            width: 80%;
            max-width: 500px;
            padding: 20px;
        }
    `;

    const FormTitle = styled.h3`
        color: #ffffff;
        font-size: 24px;
        font-weight: 800;
        margin-bottom: 30px;

        @media (max-width: 800px){
            font-size: 20px;
            margin-bottom: 20px;
        }
    `;

    const LabelInput = styled.label`
        color: #ffffff;
        font-size: 18px;

        @media (max-width: 1000px){
            font-size: 16px;
        }
    `;

    const Input = styled.input`
        margin: 10px 0 30px 0;
        width: 100%;
        height: 30px;
        border: none;
        outline: none;
        font-size: 15px;
        background: transparent;
        color: #ffffff;
        border-bottom: 1px solid rgba(235, 235, 235, .7);

        :focus{
            border-bottom: 1px solid #ffffff;
        }

        @media (max-width: 1000px){
            height: 20px;
        }
    `;

    const TextArea = styled.textarea`
        margin: 10px 0 0 0;
        width: 100%;
        height: 100px;
        border: none;
        outline: none;
        font-size: 15px;
        background: transparent;
        color: #ffffff;
        resize: none;
        border-bottom: 1px solid rgba(235, 235, 235, .7);

        :focus{
            border-bottom: 1px solid #ffffff;
        }

        @media (max-width: 1000px){
            height: 80px;
        }
    `;

    return(

        <ContactContainer id='contacto'>
            <AboutMe>
                <AboutMeTitle>Sobre mí</AboutMeTitle>
                <DeveloperText><i>Desarrollador front-end</i></DeveloperText>
                <DeveloperText Size="20px">
                    Me llamo Anibal Niz, tengo 22 años, soy <OrangeSpan>Desarrollador front-end en ReactJs</OrangeSpan>, con un contínuo aprendizaje en la programación para <OrangeSpan>adaptarme mejor</OrangeSpan> en todo momento a cualquier desafío por venir.<br/>
                    Me gustan las relaciones interpersonales, buscar soluciones, resolver problemas e implementar nuevas y mejores ideas para una <OrangeSpan>mejor eficiencia</OrangeSpan> a la hora de desarrollar.<br/><br/>
                    <OrangeSpan>=)</OrangeSpan>
                </DeveloperText>
            </AboutMe>
            <FormContainer>
                <form onSubmit={sendEmail}>
                    <FormTitle>Contáctame</FormTitle>
                    <LabelInput for='name'>Nombre</LabelInput>
                    <Input name='name' type='text' id='name'></Input>
                    <LabelInput for='email'>Email</LabelInput>
                    <Input name='email' type='email' id='email'></Input>
                    <LabelInput for='message'>Mensaje</LabelInput>
                    <TextArea name='message' id='message'></TextArea>
                    <Button text='Enviar'></Button>
                </form>
            </FormContainer>
        </ContactContainer>


    )
}