import React, { useState } from 'react';
import styled from "styled-components";
import Separator from "../components/Separator";

const Title = styled.h1`
  width: 100%;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

const Light = styled.p`
  display: inline;
  font-weight: 300;
  font-size: 24px;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  margin-bottom: 2%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const LanguageButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #285C4D; 
  border: none;
  color: white; 
  border-radius: 5px; 
  transition: transform 0.3s, box-shadow 0.3s; 
  box-shadow: 0px 5px 0px 0px rgba(0,0,0,0.2); 
  transform: translateY(0px); 
  &:hover {
    background-color: #B38E5D; 
    transform: translateY(-5px); 
    box-shadow: 0px 10px 0px 0px rgba(0,0,0,0.2); 
  &:active {
    transform: translateY(0px); 
    box-shadow: 0px 5px 0px 0px rgba(0,0,0,0.2);
  }
`;


const Video = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  const videoSources = {
    en: "https://www.youtube.com/embed/bX4hwZD3B1s?si=WTd_2srHK-OQl323",
    es: "https://www.youtube.com/embed/7-FmKOH5Fks?si=3t3aLiuX3VsqK0r1" ,
    fr: 'https://www.youtube.com/embed/oVYzjz_8a68?si=0A9lw-Yxfm-Twk6a',
    // Agrega más idiomas según sea necesario
  };

  return (
    <>
      <Title id="vid">
        Video <Light>(CONAF)</Light>
      </Title>
      <Separator />
      <ButtonContainer>
        <LanguageButton onClick={() => handleLanguageChange('en')}>Mixteco</LanguageButton>
        <LanguageButton onClick={() => handleLanguageChange('es')}>Nahuatl</LanguageButton>
        <LanguageButton onClick={() => handleLanguageChange('fr')}>Français</LanguageButton>
        <LanguageButton onClick={() => handleLanguageChange('en')}>English</LanguageButton>
        <LanguageButton onClick={() => handleLanguageChange('es')}>Español</LanguageButton>
        <LanguageButton onClick={() => handleLanguageChange('fr')}>Français</LanguageButton>
        <LanguageButton onClick={() => handleLanguageChange('en')}>English</LanguageButton>
        <LanguageButton onClick={() => handleLanguageChange('es')}>Español</LanguageButton>
      </ButtonContainer>

      <VideoContainer>
        <iframe
          width="100%"
          height="500px"
          src={videoSources[language].replace('watch?v=', 'embed/')}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoContainer>
    </>
  );
};

export default Video;
