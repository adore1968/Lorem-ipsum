import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Form() {
  const { formText, setFormText, handleSubmit } = useGlobalContext();
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Paragraphs: </label>
      <input
        type="number"
        value={formText}
        onChange={(e) => setFormText(e.target.value)}
      />
      <button type="submit">Generate</button>
    </form>
  );
}

export default Form;
