import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'


function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log("123");
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

  return (
    <div>
        <h1>To do what? What's your purpose</h1>
        <TodoForm
            onSubmit={addTodo}
        />
        <Todo
            todos={todos}
            completeTodo={completeTodo}
        ></Todo>
    </div>
  );
}

export default TodoList