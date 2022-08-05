import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--primary);
  border-bottom-left-radius: 125px;

`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  padding: 3rem 1rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  }
`