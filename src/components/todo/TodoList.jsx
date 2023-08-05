import { useSelector } from "react-redux";

const TodoList = () => {
 
    const todoItem = useSelector((state)=> state.todo.value)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
                {
                    todoItem.map((item, i)=> {
                       return (
                         <tr key={i.toString()}>
                           <td>{i}</td>
                           <td>{item}</td>
                           <td>
                             <button className="btn btn-dark">Edit</button>
                           </td>
                           <td>
                             <button className="btn btn-danger">Remove</button>
                           </td>
                         </tr>
                       );
                    })
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
