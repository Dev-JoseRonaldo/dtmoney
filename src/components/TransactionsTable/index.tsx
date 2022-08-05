import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";
import { NotePencil, Plus, TrashSimple } from "phosphor-react";

interface TransactionsTableProps{
  onOpenNewTransactionModal: () => void
  onOpenEditTransactionModal: () => void

}

export function TransactionsTable({onOpenNewTransactionModal, onOpenEditTransactionModal} : TransactionsTableProps){
  const { transactions, handleDeleteTransaction, getEditData } = useTransactions();

  return(
    <Container>        
      <button type="button" onClick={onOpenNewTransactionModal}> 
      <Plus color="#ffffff" size={14} />
        NOVA TRANSAÇÃO 
      </button>
          
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (        
            <tr key={transaction.id}>            
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR',{
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}                
              </td>
              <td>
                <div className="btnBox">

                <NotePencil 
                  className="btnActions" 
                  onClick={()=>{
                    onOpenEditTransactionModal();
                    getEditData(transaction);}                               
                  }
                  color="#EBD50F" 
                  size={22} 
                  alt="Editar Transação"
                />
                <TrashSimple 
                  className="btnActions" 
                  onClick={() => handleDeleteTransaction(transaction.id)} 
                  color="#FF7657" 
                  size={22} 
                  alt="Deletar Transação"/>
                </div>
              </td>
            </tr>           
          ))}         
        </tbody>
      </table>

    </Container>
  )
}