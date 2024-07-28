import React, { Component } from 'react';
import api from '../../services/api'; 
import './index.css'; 
class TransactionList extends Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    this.fetchTransactions();
  }

  fetchTransactions = () => {
    api.get('/transactions')
      .then(response => this.setState({ transactions: response.data }))
      .catch(error => console.error('Error fetching transactions:', error));
  };

  render() {
    const { transactions } = this.state;

    return (
      <div className="transaction-list-container">
        <h2>Office Transactions</h2>
        <table className="transaction-list-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                <td>{transaction.description}</td>
                <td>{transaction.type === 'Credit' ? transaction.amount : ''}</td>
                <td>{transaction.type === 'Debit' ? transaction.amount : ''}</td>
                <td>{transaction.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TransactionList;
