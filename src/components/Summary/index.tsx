import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

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
          <img src={incomeImg} alt="Entradas" />
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
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>           
          {new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}</strong>
      </div>
      <div className={'highlight-background ' + (summary.total >= 0 ? 'green' : 'red')  }>
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="" />
        </header>
        <strong >
          {new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}