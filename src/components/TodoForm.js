import React, {useState} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('');
  
  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    // props.onSubmit({
    //     id: Math.floor(Math.random() * 10000),
    //     text: input
    // });
    // reset input lại giá trị 0
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Add a note" 
            value={input} 
            name="text" 
            className="todo-input" 
            onChange={handleChange}
        />
        <button className="Add-button">Add note to your todo</button>
    </form>
  )
}

export default TodoForm