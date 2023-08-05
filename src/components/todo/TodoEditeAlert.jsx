import Swal from "sweetalert2";
import Store from "../../redux/store/Store";
import { EditTodo } from "../../redux/state/todo/TodoSlice";


export function TodoEditeAlert(i, item) {
   
    Swal.fire({
      title: "Update Task Name",
      input: "text",
      inputValue:item,
      inputValidator:(value)=>{
         if(value){
            Store.dispatch(EditTodo({index:i, task:value}));
         }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Store.dispatch(RemoveTodo(i));
      }
    });

}