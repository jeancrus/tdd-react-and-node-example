import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTech } from "../../store/modules/techs/actions";
// import { Container } from './styles';

export default function TechList() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const techs = useSelector(state => state.techs);
  // useEffect(() => {
  //   const techs = localStorage.getItem("state");
  //   if (techs) {
  //     setState(JSON.parse(techs));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("state", JSON.stringify(state));
  // }, [state]);

  function handleClick() {
    dispatch(addTech(text));
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
        {techs.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
