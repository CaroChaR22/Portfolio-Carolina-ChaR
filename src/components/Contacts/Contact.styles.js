import styled from "styled-components";
// se importa la libreria

import { colors } from "../../styles/colors";

export const ContactCont = styled.div`
  padding: 50px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 30px;
  text-align: center;
`;

export const FormContainer = styled.div`
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0 0 0 / 16%);
  padding: 30px;
  margin: 0 auto;
`;

export const Form = styled.form`
  box-sizing: border-box;
`;

export const InputFormContact = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 2px solid #4c526838;
  background-color: transparent;
  font-size: 16px;
  display: block;
  width: 100%;
  margin-buttom: 15px;
  color: #4c526838;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: 2px solid #4c526838;
  background-color: transparent;
  font-size: 16px;
  display: block;
  width: 100%;
  margin-buttom: 15px;
  color: #4c526838;
`;

export const ContactButton = styled.button`
color: black;
  box-shadow: 1px 3px 5px 0 #607D8B;
  background: linear-gradient(135deg, #55585D 0%, #C9C9C9 50%, #E3E3E3 100%);
  padding: 10px 40px;
  border-radius: 999px;
  border: none;
  margin: 15px 0;
  font-weight: 700;
  cursor: pointer;
  width: 120px;
  text-transform: uppercase;
  &:hover{
     filter:brightness(90%);
     color: ${colors.TEXT_WHITE};
  }
`;


export const ContainerCheck = styled.div`
display: flex;
justify-content: start;
align-items: center;
margin-top: 5px;

span {
  color: ${colors.TEXT_BLACK};
}
`;

export const ErrorText = styled.p`
color: red;
font-size: 15px;
text-align: center;
`;

export const SuccessMsg = styled.p`
color: limegreen;
font-size: 15px;
text-align: center;
`;

export const FillAll = styled.p`
text-align: center;
`;