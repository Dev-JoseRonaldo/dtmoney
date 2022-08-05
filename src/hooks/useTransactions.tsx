import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

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
  createTransaction: (transaction: TransactionInput) => Promise<void>
  handleDeleteTransaction: (id: number) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProvidesProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() =>{
    api.get('transactions')
    .then( res => setTransactions(res.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([
      transaction,
      ...transactions,   
    ]);
  }

  async function handleDeleteTransaction(id: number) {
    try {
      await api.delete(`transactions/${id}`);

      const filteredTransactions = transactions.filter(
        (transaction) => transaction.id !== id
      );

      setTransactions(filteredTransactions);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction, handleDeleteTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );

}

export function useTransactions(){
  const context = useContext(TransactionsContext)

  return context;
}