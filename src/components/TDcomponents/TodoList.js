import React, { useContext, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { MyContext } from '../../contexts/MyContext';
import '../../css/todo.css';



function TodoList() {
    const [todos, setTodos] = useState([]);
    const { setUsername, setIsLogged, setPassWork, username, passwork, isLogged } = useContext(MyContext);

    // Hàm add todo thêm task mới vào todo app
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    // Hàm điều chỉnh trạng thái cho task
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    // Hàm xoá task
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };

    // Hàm cập nhật task
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    };

  return (
    <div class="todo-app">
        <h1>An nhong {username} </h1>
        <TodoForm
            onSubmit={addTodo}
        />
        <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
        />
    </div>
  );
}

export default TodoList