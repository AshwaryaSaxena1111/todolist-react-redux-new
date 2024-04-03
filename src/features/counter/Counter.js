import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo,toggleTodo } from "./counterSlice";

// export function Counter() 
//     const count = useSelector((state) => state.counter.value )
//     const dispatch = useDispatch()

//     return (
//       <div>
//         <div>
//           <button
//             aria-label="Increment value"
//             onClick={() => dispatch(increment())}
//           >
//             Increment
//           </button>
//           <span>{count}</span>
//           <button
//             aria-label="Decrement value"
//             onClick={() => dispatch(decrement())}
//           >
//             Decrement
//           </button>
//         </div>
//       </div>
//     );
// }

  const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    if(!todos) {
        return <div>No todos found!</div>
    }

    const handleAddTodo = () => {
        const newTodo = {
            id:Math.random().toString(36).substr(2,9),
            text: 'New Todo',
            completed: false,
        };
         dispatch(addTodo(newTodo));
    };

    const handleRemoveTodo = id => {
        dispatch(removeTodo({id}));
    };

    const handleToggleTodo = id => {
        dispatch(toggleTodo({id}));
    };
 
    
    return (
        <div>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span 
                        style={{textDecoration: todo.completed ? 'line-through': 'none'}}
                        onClick={() => handleToggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => handleRemoveTodo(todo.id)}Remove></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;