import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerNavbar = styled.div`
  max-width: 100vw;
  height: 100px;
  box-shadow: ${colors.BOX_SHADOW};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: ${colors.BACKGROUND_COLOR};
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const Titles = styled.title`
  display: inline-block;
  //   align-items: center;

  h1,
  h2 {
    font-weight: 700;
    color: ${colors.TEXT_BLACK};
    margin: 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    background: linear-gradient(135deg, #cb5eee, 20%, #4be1ec 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Logo = styled.img`
  width: 90px;
  padding-right: 20px;
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;

  p {
    cursor: pointer;
    padding: 0 13px;
    text-decoration: none;
    color: ${colors.TEXT_BLACK};
    font-weght: 500;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.showMenuBurguer ? "inline-grid" : "none")};
    position: absolute;
    top: 100px;
    background: ${colors.TEXT_WHITE};
    box-shadow: ${colors.BOX_SHADOW_BLUE};
    padding: 10px 0 20px 0;
    width: 100%;
    left: 0;

    a {
      padding: 10px 20px;
    }
  }
`;


export const ContainerButton = styled.button`
  display: flex;
  align-items: center;
  color: ${colors.TEXT_BLACK};
  border-radius: 999px;
  margin: 10px 0;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: LightGray;
    padding: 5px 10px;
    box-shadow: 0px 1px 1px 3px gray;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    width: 50%;
    margin: 5px 10px 0 10px;
  }
`;

export const  ContainerBurguer= styled.div`
display: none;

@media (max-width: 768px) {
  display: block;
}
`;

export const MenuBurguer = styled.div`
width: 35px;
height: 2px;
background-color: ${colors.TEXT_BLACK};
margin: 6px 0;
`;




// se exportan los estilos para que sean importados en el archivo Navbar.js  ()
