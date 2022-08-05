import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import logoImg from '../../assets/logo.svg';
import { Container, Content, ProfileContainer } from './styles';

interface Props{
  toggleTheme(): void;
}

export function Header ({ toggleTheme } : Props){
  const { colors, title } = useContext(ThemeContext)

  return(
    <Container>  
      <Content>
        <img src={logoImg} alt="dt money" />

        <ProfileContainer>
          <div className='text-box'>
            <strong>Ronaldo</strong>
            
            <Switch 
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={15}
              offColor={colors.secundary}
              onColor= {colors.text_white}
            />
          </div>

          <img 
            className='profile-img' 
            src="https://avatars.githubusercontent.com/u/83667469?v=4" 
            alt="Foto de perfil do Ronaldo"
          />
        </ProfileContainer>

      </Content>   
    </Container>
  )
}