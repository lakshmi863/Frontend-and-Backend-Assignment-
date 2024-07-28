import React from 'react';

import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

const App = () => {
  return (
<div>
  <AddTransaction/>
  <TransactionList/>
</div>
  );
};

export default App;
