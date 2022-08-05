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
  getEditData: (transaction: Transaction) => void;
  createTransaction: (transaction: TransactionInput) => Promise<void>
  handleDeleteTransaction: (id: number) => Promise<void>;
  handleUpdateTransaction: (
    transactionsUpdate: TransactionInput
  ) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProvidesProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [editTransaction, setEditTransactions] = useState<Transaction>(
    {} as Transaction
  );

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

  async function handleUpdateTransaction(transactionsUpdate: TransactionInput) {
    console.log(editTransaction.id)
    try {
      const response = await api.put(`/transactions/${editTransaction.id}`, {
        ...editTransaction,
        ...transactionsUpdate,
        
      });

      const updateTransactions = transactions.map((transaction) =>
        transaction.id === editTransaction.id
          ? { ...response.data.transaction }
          : transaction
      );

      setTransactions(updateTransactions);
    } catch (error) {
      console.log(error);
    }
  }

  function getEditData(transaction: Transaction) {
    setEditTransactions(transaction);
  }

  return (
    <TransactionsContext.Provider value={{getEditData, transactions, createTransaction, handleDeleteTransaction,handleUpdateTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );

}

export function useTransactions(){
  const context = useContext(TransactionsContext)

  return context;
}