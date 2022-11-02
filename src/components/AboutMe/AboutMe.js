// snipet rfce
import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkedIn from "../../svg/linkedin.svg";


function AboutMe() {
  const socialNetwork = [
    {
      name: "Github",
      link: "https://github.com/CaroChaR22",
      logo: logoGithub
    },

    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/francy-carolina-chacon-romero-697840252/",
      logo: logoLinkedIn
    }

  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <div>
          <p>
          </p>
          </div> 
        <S.ContainerText>
          <S.Title>
            <p>Hello, I'm</p>
            <p>Carolina ChaR</p>
            <p>Fullstack Developer</p>
          </S.Title>
          <S.DescriptionText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, dolorem? Omnis, voluptas minima dolores natus beatae molestias repellat sequi blanditiis velit
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetwork.map((network, index) => (
              <a
                key={index} 
                href={network.link} 
                target="_blank" 
                rel="xxx"   
              >
              <img 
                src={network.logo} 
                alt={network.name} 
              /> 
              </a>
              ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src="/img/profile.png" alt="Caro_ChaR"/>
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
}

export default AboutMe;


// esto es una ruta relativa, va directamente a la raiz ::    
        // <img src="/img/profile.png" alt="Caro_ChaR"/>