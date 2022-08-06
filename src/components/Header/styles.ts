import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--primary);
  border-bottom-left-radius: 125px;

  @media(max-width: 1400px) {
    border-bottom-left-radius: 0;
  }

  @media(max-width: 900px) {
    border-bottom-left-radius: 0;
  }

`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  padding: 3rem 1rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 500px) {
    padding: 1rem 1rem 5rem;
  }

  img{
    @media(max-width: 700px) {
      width: 150px;
    }
    
    @media(max-width: 500px) {
      width: 120px;
    }  

    @media(max-width: 400px) {
      width: 100px;
    }   
}
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  text-align: center;

  color: #ffffff;
  font-size: 0.875rem;

  .text-box{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: end;
  }

  img{
    width: 55px;
    border-radius: 50%;

    @media(max-width: 500px) {
      width: 40px;
    }

  }
`