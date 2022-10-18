import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : ''); // tạo próp để bắt lấy giá trị hiện tại
  
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  })

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });
    // reset input lại giá trị 0
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? 
        (
          <div>
            <input 
              type="text" 
              placeholder="Update your item " 
              value={input} 
              name="text" 
              className="todo-input edit" 
              onChange={handleChange}
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="todo-button edit">Update</button>
          </div>
        ) : 
        (
          <div>
            <input 
              type="text" 
              placeholder="Add a todo" 
              value={input} 
              name="text" 
              className="todo-input" 
              onChange={handleChange}
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="todo-button">Add note to your todo</button>
          </div>
        )}
    </form>
  )
}

export default TodoForm