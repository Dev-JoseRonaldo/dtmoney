import { useState } from "react";
import { EditTransactionModal } from "../EditTransactionModal";
import { NewTransactionModal } from "../NewTransactionModal";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";



export function Dashboard(){
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);
  const [isEditTransactionModalOpen,setIsEditTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleClosenNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  function handleOpenEditTransactionModal(){
    setIsEditTransactionModalOpen(true)
  }

  function handleClosenEditTransactionModal(){
    setIsEditTransactionModalOpen(false)
  }

  return(
    <Container>
      <Summary />
      <TransactionsTable 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
        onOpenEditTransactionModal={handleOpenEditTransactionModal}
      />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleClosenNewTransactionModal}
      />
      <EditTransactionModal 
        isOpen={isEditTransactionModalOpen}
        onRequestClose={handleClosenEditTransactionModal}
      />
    </Container>
  );
}