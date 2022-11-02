//se importa la carpeta de estilos y todos los componentes de ese archivo

import React, { useState, useRef } from "react";
import * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";



const Contact = () => {
  const [contacDates, setContacDates] = useState({
    name: "",
    email: "",
    message: "",
    checkCheckBox: false,
  });

  const [emptyInputs, setEmptyInputs] = useState(false);
  const [successSendForm, setSuccessSendForm] = useState(false);
  const [errorSendForm, setErrorSendForm] = useState(false)


  const form = useRef();


  const onSubmit = (e) => {
    //evita que se actualice el formulario al hacer click en el boton
    e.preventDefault();

    // validar el formulario
    if (
      contacDates.name === "" ||
      contacDates.email === "" ||
      contacDates.message === "" ||
      contacDates.checkCheckBox === false
    ) {
      setEmptyInputs(true);
    }
    // enviar el formulario
    else { emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID)
        .then(
          (result) => {
            setSuccessSendForm(true);
          },
          (error) => {
            setErrorSendForm(true);
          }
        )
    }
  };

  console.log(contacDates);
  return (
    <S.ContactCont id="contact-me">
      <S.ContactTitle> Contact me </S.ContactTitle>
      
      <S.FormContainer>
      {successSendForm ? (
        <S.SuccessMsg>The form was send succesfully</S.SuccessMsg>)
        : (
        <S.Form onSubmit={onSubmit} ref={form}>
          <S.InputFormContact
            placeholder="your name"
            type="text"
            name="name"
            onChange={(e) =>
              setContacDates({ ...contacDates, name: e.target.value })
            }
            value={contacDates.name}
          />

          <S.InputFormContact
            placeholder="your email"
            type="email"
            name="email"
            onChange={(e) =>
              setContacDates({ ...contacDates, email: e.target.value })
            }
            value={contacDates.email}
          />

          <S.TextArea
            placeholder="whats your message"
            name="message"
            onChange={(e) =>
              setContacDates({ ...contacDates, message: e.target.value })
            }
            value={contacDates.message}
          />

          <S.ContainerCheck>
            <input
              type="checkbox"
              onChange={(e) =>
                setContacDates({
                  ...contacDates,
                  checkCheckBox: e.target.checked,
                })
              }
            />

            <span>Terminos y condiciones</span>
          </S.ContainerCheck>

          <S.ContactButton type="submt">Send </S.ContactButton>
        </S.Form>
       )}
        {emptyInputs && (<S.FillAll>You should fill all inputs and accept the terms</S.FillAll>
        )}
        {errorSendForm && <S.ErrorText>There was an Error, try it later.</S.ErrorText>}

       </S.FormContainer>
    </S.ContactCont>
  );
}

export default Contact;
