import React, { Component } from 'react';
import api from '../../services/api'; 

import './index.css'; 

class AddTransaction extends Component {
  state = {
    date: '',
    description: '',
    amount: '',
    type: 'Credit',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { description, amount, type } = this.state;
    api.post('/transactions', {
      
      description,
      amount: parseFloat(amount),
      type,
    }).then(() => {
      this.props.history.push('/');
    }).catch(error => console.error('Error adding transaction:', error));
  };

  render() {
    const { description, amount, type } = this.state;

    return (
      <div className="add-transaction-container">
        <h2>Add Transaction</h2>
        <form className="add-transaction-form" onSubmit={this.handleSubmit}>
        <label>Type:</label>
          <select name="type" value={type} onChange={this.handleChange}>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
          <label>Description:</label>
          <input type="text" name="description" value={description} onChange={this.handleChange} required />
          <label>Amount:</label>
          <input type="number" name="amount" value={amount} onChange={this.handleChange} required />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default (AddTransaction);
