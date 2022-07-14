import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleClosenNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleClosenNewTransactionModal}     
      >
          <h2>Cadastrar nova transação</h2>
      </Modal>
      <GlobalStyle />
    </div>
  );
}


