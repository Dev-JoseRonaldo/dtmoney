import { Children, createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction{
  id: number;
  title :string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProvidesProps{
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({children}: TransactionsProvidesProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() =>{
    api.get('transactions')
    .then( res => setTransactions(res.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );

}