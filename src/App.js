import React, { useState } from "react";
import Header from "./components/Header";
import { Balance } from "./components/Balance";
import { Expenses } from "./components/Expenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Delete a transaction
  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
  };

  // Add a transaction
  const addTransaction = (transaction) => {
    setTransactions((prev) => [transaction, ...prev]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <Expenses transactions={transactions} />
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
};

export default App;
