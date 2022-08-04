
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {



  return (
    <TransactionsProvider>
      <Header  />
      <Dashboard />

      <GlobalStyle />
    </TransactionsProvider>
  );
}


