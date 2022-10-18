import styled from "styled-components";
import { colors } from "../../styles/colors";


export const ContainerAboutMe = styled.div``;

export const ContainerFlex = styled.div`
display: flex;  
align-items: center;
justify-content: center;
max-width: 900px;
margin: 0 auto;

@media (max-width: 768px) {
    display: block;
    padding: 0 30px;
`;

export const ContainerText = styled.div`
padding: 0 30px;

@media (max-width: 768px) {
    padding: 0;
`;


export const Title = styled.h1`
margin: 0; 
padding: 20px 0;

p {
    margin: 0;
}

p:nth-child(2) {
    font-size: 55px;
    background: ${colors.TEXT_GRADIENT_RED};
    -webkit-background-clip: text !important; 
    -webkit-text-fill-color: transparent !important;
}

@media (max-width: 768px) {
    padding: 0;
    text-align: center;

    p:nth-child(2) {
        font-size: 2rem;
    }
}
`;

export const DescriptionText = styled.div`
font-size: 16px;
color: ${colors.TEXT_GREY_NEUTRAL};
padding-rigth: 100px;

@media (max-width: 768px) {
    padding-right: 0px;

`;

export const ContainerIcons = styled.div`
display: flex;

img {
    width: 32px;
    height: 32px;
    margin: 10px;
}

@media (max-width: 768px) {
    justify-content: center;
}
`;

export const ContainerImage = styled.div`
text-align: center;
max-width:250px;

img {
    width: 200px;
    border-radius: 50%;
}

// responsive

@media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
    margin: 0 auto:

    img {
        width: 100%;
    }
}

`;



// display: flex;  cuando hallan dos div uno se irá a la derecha y el otro a la izquierda
// en @media: el display: block; colocara los div uno debajo del otro cuando la pantalla sea mas pequeña
// padding: 0px 30px :: toma solo los extremos
// p:nth-child(2):: los segundos hijos de p recibiran los estilos establecidos
