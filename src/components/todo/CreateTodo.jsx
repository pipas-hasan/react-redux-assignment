import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../../redux/state/todo/TodoSlice";

const CreateTodo = () => {

  const dispatch = useDispatch();
  const taskInput = useRef();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <input ref={taskInput}
            type="text"
            placeholder="Task Name" 
            className="form-controller col-12"
          />
        </div>
        <div className="col-2">
          <div onClick={() => dispatch(AddTodo(taskInput.current.value))} className="btn btn-secondary">Add To Do</div>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
