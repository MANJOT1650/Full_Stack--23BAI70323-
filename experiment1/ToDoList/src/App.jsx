import React, { useState, useEffect } from 'react';
import './App.css';

export default function TodoList() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos') || '[]'));
  const [text, setText] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const add = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text }]);
    setText('');
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="input-group">
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' && add()} 
          placeholder="Add task"
        />
        <button onClick={add}>Add</button>
      </div>

      <div className="todo-list">
        {todos.map(t => (
          <div key={t.id} className="todo-item">
            <span>{t.text}</span>
            <button className="remove-btn" onClick={() => setTodos(todos.filter(x => x.id !== t.id))}>
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}