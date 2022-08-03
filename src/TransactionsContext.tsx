import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction{
  id: number;
  title :string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsProvidesProps{
  children: ReactNode;
}

interface TransactionsContextData{
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProvidesProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() =>{
    api.get('transactions')
    .then( res => setTransactions(res.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionInput){

    api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );

}