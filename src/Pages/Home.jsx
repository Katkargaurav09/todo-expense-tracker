import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to Your Personal Productivity App 🚀</h1>
      <p className="subtitle">
        Manage your tasks and track your expenses in one place!
      </p>

      <div className="card-container">
        <div className="card">
          <h2>📝 To-Do List</h2>
          <p>Keep track of your daily tasks and never miss a deadline.</p>
          <Link to="/ToDoList">
            <button className="button">Go to To-Do List</button>
          </Link>
        </div>

        <div className="card">
          <h2>💰 Expense Tracker</h2>
          <p>Track your income and expenses to stay on top of your budget.</p>
          <Link to="/ExpenseTracker">
            <button className="button">Go to Expense Tracker</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
