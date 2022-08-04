import { useState } from "react";
import { NewTransactionModal } from "../NewTransactionModal";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";



export function Dashboard(){
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleClosenNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return(
    <Container>
      <Summary />
      <TransactionsTable onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleClosenNewTransactionModal}
      />
    </Container>
  );
}