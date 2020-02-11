import React, { useState } from "react";

// import { Container } from './styles';

export default function TechList() {
  const [state, setState] = useState([]);
  const [text, setText] = useState("");

  function handleClick() {
    setState([...state, { id: Math.random(), name: text }]);
    setText("");
  }

  function handleText(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleClick} data-testid="tech-form">
        <label htmlFor="tech">Tech</label>
        <input type="text" id="tech" value={text} onChange={handleText} />

        <button type="submit">Adicionar</button>
      </form>
      <ul data-testid="tech-list">
        {state.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
