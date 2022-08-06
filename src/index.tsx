import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Vendas',
          type: 'deposit',
          category: 'Cursos',
          amount: 800,
          createdAt: new Date('2022-08-05 12:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 800,
          createdAt: new Date('2022-08-04 08:00:00'),
        },
        {
          id: 3,
          title: 'Luz',
          type: 'withdraw',
          category: 'Casa',
          amount: 400,
          createdAt: new Date('2022-08-02 14:00:00'),
        },
        {
          id: 4,
          title: 'Água',
          type: 'withdraw',
          category: 'Casa',
          amount: 250,
          createdAt: new Date('2022-08-02 14:00:00'),
        },
        {
          id: 5,
          title: 'Mecânico',
          type: 'withdraw',
          category: 'Carro',
          amount: 1600,
          createdAt: new Date('2022-08-01 18:00:00'),
        },
        {
          id: 6,
          title: 'Emprego',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-07-29 13:00:00'),
        }
      ]
    })
  },

  routes(){
    this.namespace ='api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions',(schema, request) => {
      const data =JSON.parse(request.requestBody);

      return schema.create('transaction', data)
    });
    
    this.put("/transactions/:id", (schema: any, request) => {
      const data = JSON.parse(request.requestBody);
      const { id } = request.params;
      const transaction = schema.transactions.find(id);
      return transaction.update(data);
    });

    this.del("/transactions/:id", (schema: any, request) => {
      const { id } = request.params;
      return schema.transactions.find(id).destroy();
    });
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

