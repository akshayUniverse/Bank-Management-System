// src/components/Transactions.js
import React from 'react';

function Transactions() {
  const transactions = [
    { id: 1, date: '2024-11-10', amount: 150, description: 'Groceries' },
    { id: 2, date: '2024-11-11', amount: 75, description: 'Gas' },
    { id: 3, date: '2024-11-12', amount: 200, description: 'Utilities' },
  ];

  return (
    <div className="transactions-page">
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
