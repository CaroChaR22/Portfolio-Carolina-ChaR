import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerProject = styled.div`
max-width: 900px;
margin: 0 auto;
padding-top: 50px;

@media (max-width: 768px) {
    padding-top: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;

  span {
    font-size: 40px;
    background: linear-gradient(135deg, #d92546 0%, #e675dc 50%, #fd5ddb 90%);
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
  }
`;

export const ContProject = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const projectConten_2 = styled.div`
  padding: 0 10px;
`;

export const titleProject = styled.h3`
  padding: 8px 15px;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  margin-bottom: 10px;
  color: ${colors.TEXT_WHITE};
  background: linear-gradient(135deg, #d92546 0%, #e675dc 50%, #fd5ddb 100%);
  box-shadow: 2px 5px 3px rgba(18, 18, 18, 0.79);
  text-decoration: none;
  border-radius: 10px;
`;

export const contImage = styled.div`
text-align: center; 

img {
    width: 100%;
    box-shadow: ${colors.BOX_SHADOW_BLUE};
    border-radius: 5px;
}

@media(max-width: 768px){
    img {
        max-width: 250px;
    }
}

`;


export const contTech = styled.div`

display: flex;
align-items: center;
padding-top: 30px;
justify-content: space-evenly;

div {
    text-align: center;
}

img {
    width: 40px;
    height: auto;
    margin: 3px 5px;
}

p {
    margin-top: 2px;
    font-size: 13px;
    color: ${colors.TEXT_GREY_NEUTRAL};
}

`;

export const Description = styled.div`
margin-top: 0;

`;

export const footer  = styled.div`
display: flex;
margin-top: 10px;

img {
    width: 35px;
}

a:first-of-type {
    padding: 0 20px;
}

`;
