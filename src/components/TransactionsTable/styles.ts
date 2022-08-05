import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  button{
    font-size: 0.875rem;
    color: #fff;
    background: var(--secundary);
    border: 0;
    padding: 0.5rem 1.25rem;
    border-radius: 15px;
    
    transition: filter 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    margin-bottom: 1rem;

    &:hover{
      filter: brightness(0.9);
    }
  }
  
  table {
    width: 100%;
    border-spacing: 0 1rem;

   
    td,th{
      &:first-child{       
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.1);
            
      }

      &:last-child{
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        box-shadow: 2px 2px 2px  rgba(0, 0, 0, 0.1);                       
      }
          
    }
      
    thead{

      th {
        color: var(--text-white);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;   
        box-shadow: 0px 5px 4px -3px rgba(0, 0, 0, 0.1);   
      }

      tr {              
        background: var(--secundary);              
      }
    }

    tbody{
      tr {      
        color: var(--text-body);
        border: 0;
        border-radius: 0.25rem;
        background: var(--shape);
        
      
        
        td {
          box-shadow: 0px 5px 4px -3px rgba(0, 0, 0, 0.1);
          padding: 1rem 2rem;
         
          
          
          &:first-child {
            color: var(--text-title);
          }
    
          &.deposit {
            color: var(--green);
          }
    
          &.withdraw {
            color: var(--red);
          }

          .btnBox{
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 0.5rem;
          }
          .btnActions{
            cursor: pointer;
            
          }
          
        }
      }
    }

  }

`