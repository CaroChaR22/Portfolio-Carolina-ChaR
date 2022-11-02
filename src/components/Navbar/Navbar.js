import { useState } from "react";
import React from "react";
import * as S from "./Navbar.styles";

const Navbar = () => {
  const [showMenuBurguer, setShowMenuBurguer] = useState(false);

  const clickItemsNav = item => {
    document.getElementById(item).scrollIntoView({behavior: "smooth"});
  }

  return (
    <S.ContainerNavbar>
      <S.ContainerLogo>
        <S.Logo src="" alt="" />
        <S.Titles>
          <h1>Carolina ChaR</h1>
          <h2>Desarrolladora Full Stack</h2>
        </S.Titles>
      </S.ContainerLogo>

      <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
        <S.MenuBurguer />
        <S.MenuBurguer />
        <S.MenuBurguer />
      </S.ContainerBurguer>

      <S.ContainerItems showMenuBurguer={showMenuBurguer}>
        <p onClick={() => clickItemsNav("about-me")}>About me</p>
        <p onClick={() => clickItemsNav("my-projects")}>Projects</p>

        <S.ContainerButton>
          <div onClick={() => clickItemsNav("contact-me")}>📞 Contact me</div>
        </S.ContainerButton>
      </S.ContainerItems>
    </S.ContainerNavbar>
  );
};

export default Navbar;

// rafce == react functional component
// se acreado una variable en el archivo de estilos del navbar
//  se importan todas laviables del archivo de estilos como se indica en la linea 2
// se crea un contenedor donde se hará toda la funcionalidad
