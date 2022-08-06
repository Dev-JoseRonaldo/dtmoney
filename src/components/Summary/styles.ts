import styled from "styled-components";

export const Container =  styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4.3rem;
  margin: -5rem auto 0;
  place-items: center;

  font-size: 1.2rem;

  @media(max-width: 1080px) {
    max-width: 800px;
    gap: 2rem;
  }

  @media(max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
    gap: 1rem;
  }

  div {
    width: 100%;
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    color: var(--text-title);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
 

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 3rem;

    
    }

    &.deposit-color{
      color: var(--green);
    }

    &.withdraws-color{
      color: var(--red);
    }

    &.highlight-background{
      background: var(--green);
      color: #fff;
    }
    &.highlight-background.red{
      background: var(--red);
    }

    @media(max-width: 700px) {
      max-width: 45%;
    }

    @media(max-width: 570px) {  
      max-width: 400px;
      min-width: 300px;
    
    }
  }

`