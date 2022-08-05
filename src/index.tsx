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
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
        },
        {
          id: 3,
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 4,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
        },
        {
          id: 5,
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 6,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
        },
        {
          id: 7,
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 8,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
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

