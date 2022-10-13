// se pasará como parametro un children que va conectado al container de App.js
// estilado con Container.Styles.js. los estilos deben ser importados con uso de las variables


import React from 'react';
import * as S from './Container.styles';


const Container = ({children}) => {
  return (
    <S.ContainerContent>{children}</S.ContainerContent>
  )
}

export default Container;