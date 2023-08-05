
const CreateTodo = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <input
            type="text"
            placeholder="Task Name"
            className="form-controller col-12"
          />
        </div>
        <div className="col-2">
          <div className="btn btn-secondary">Add To Do</div>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
