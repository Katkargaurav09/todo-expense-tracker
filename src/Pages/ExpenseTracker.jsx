import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const ExpenseTracker = () => {
  let [data, setData] = useState({ name: "", amount: "", tracker: "" });
  let [finalData, setFinalData] = useState([]);

  const incomeData = finalData
    .filter((item) => item.tracker === "income")
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  const expenseData = finalData
    .filter((item) => item.tracker === "expense")
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  const balance = incomeData - expenseData;

  const handleData = (e) => {
    let { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = (e) => {
    if (!data.name.trim() || !data.amount.trim() || !data.tracker) {
      alert("Please fill all fields!");
      return;
    }

    let newAmount = Number(data.amount);
    let newTransaction = { id: Date.now(), ...data };

    setFinalData((prev) => [...prev, newTransaction]);
    setData({ name: "", amount: "", tracker: "" });
  };

  const handleDelete = (id, amount, tracker) => {
    setFinalData(finalData.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className="expense-container">
      <div className="heading">
        <h2>Expense Tracker</h2>
      </div>
      <div className="expense-manage">
        <div className="balance">
          <h3>YOUR BALANCE</h3>
          <h3>₹ {balance}</h3>
        </div>
        <div className="display-balance">
          <div className="income">
            <h3>INCOME</h3>
            <h3 className="green">₹ {incomeData}</h3>
          </div>
          <hr />
          <div className="Expense">
            <h3>EXPENSE</h3>
            <h3 className="red">₹ {expenseData}</h3>
          </div>
        </div>
        <div className="history">
          <div className="history-heading">
            <h3>History</h3>
            <hr />
          </div>
          <div className="history-container">
            {finalData.map((v) => {
              let { id, name, amount, tracker } = v;
              return (
                <div className="history-content">
                  <h2 className="name-head">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </h2>
                  <h2 className={tracker === "income" ? "green" : "red"}>
                    ₹ {amount}
                  </h2>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(id, amount, tracker)}
                  >
                    <RiDeleteBin6Line className="icon" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="add-expense">
          <div className="transaction-heading">
            <h3>Add New Transaction</h3>
            <hr />
          </div>
          <div className="form">
            <div className="manage">
              <label>
                <input
                  type="radio"
                  name="tracker"
                  value="income"
                  onChange={handleData}
                  checked={data.tracker === "income"}
                />
                INCOME
              </label>
              <label>
                <input
                  type="radio"
                  name="tracker"
                  value="expense"
                  onChange={handleData}
                  checked={data.tracker === "expense"}
                />
                EXPENSE
              </label>
            </div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={handleData}
              placeholder="Enter name of transaction...."
            />
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={data.amount}
              onChange={handleData}
              placeholder="Enter amount..."
            />
            <button onClick={handleClick}>Add Transaction</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
