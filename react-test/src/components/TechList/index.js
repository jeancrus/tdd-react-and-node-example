import React, { useState, useEffect } from "react";

// import { Container } from './styles';

export default function TechList() {
  const [state, setState] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const techs = localStorage.getItem("state");
    if (techs) {
      setState(JSON.parse(techs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  function handleClick() {
    setState([...state, text]);
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
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
