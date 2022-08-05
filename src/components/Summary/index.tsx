import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary(){
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc,transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }else{
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  },{
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return(
    <Container>
      <div className='deposit-color'>
        <header>
          <p>Entradas</p>
        </header>
        <strong>          
          {new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}</strong>
      </div>
      <div className='withdraws-color'>
        <header>
          <p>Saídas</p>
        </header>
        <strong>           
          {new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Saldo</p>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}