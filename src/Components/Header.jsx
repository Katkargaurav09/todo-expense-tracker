import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to={"/"}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={"/ToDoList"}>TO-DO</NavLink>
        </li>
        <li>
          <NavLink to={"/ExpenseTracker"}>EXPENSE</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
