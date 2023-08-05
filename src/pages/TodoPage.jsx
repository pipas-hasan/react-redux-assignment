import React from "react";
import CreateTodo from "../components/todo/CreateTodo";
import TodoList from "../components/todo/TodoList";
import { AddTodo } from "../redux/state/todo/TodoSlice";

const TodoPage = () => {
  return (
    <div className="container my-5">
      <div className="row ">
        <div className="col-10 mx-auto ">
          <div className="card ">
            <div className="card-header text-center">
              <h5>Todo App</h5>
            </div>
            <div className="card-body">
              <CreateTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
