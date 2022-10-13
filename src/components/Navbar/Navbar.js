import { useState } from "react";
import React from "react";
import * as S from "./Navbar.styles";

const Navbar = () => {
  const [showMenuBurguer, setShowMenuBurguer] = useState(false);
  console.log(showMenuBurguer);


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

      <S.ContainerItems showMenuBurguer={ showMenuBurguer}>
        <p>About me</p>
        <p>Projects</p>

        <S.ContainerButton>
          <div>📞 Contact me</div>
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
