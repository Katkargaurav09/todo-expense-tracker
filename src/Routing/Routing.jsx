import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import ToDoList from "../Pages/ToDoList";
import ExpenseTracker from "../Pages/ExpenseTracker";

const Routing = () => {
  let route = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ToDoList",
      element: <ToDoList />,
    },
    {
      path: "/ExpenseTracker",
      element: <ExpenseTracker />,
    },
  ]);
  return route;
};

export default Routing;
