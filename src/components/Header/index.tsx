import logoImg from '../../assets/logo.svg';
import { Container, Content, ProfileContainer } from './styles';

export function Header(){
  return(
    <Container>  
      <Content>
        <img src={logoImg} alt="dt money" />

        <ProfileContainer>
          <div className='text-box'>
            <strong>Ronaldo</strong>
            <strong>BRA</strong>
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