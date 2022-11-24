import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Form() {
  const { formText, setFormText, handleSubmit } = useGlobalContext();
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex justify-center items-center"
    >
      <label className="text-lg sm:text-xl text-white">Paragraphs: </label>
      <input
        type="number"
        value={formText}
        onChange={(e) => setFormText(e.target.value)}
        className="mx-2 w-14 rounded px-1 py-0.5 text-lg sm:text-xl"
      />
      <button
        type="submit"
        className="text-white text-lg sm:text-xl uppercase px-4 py-1 bg-red-500 rounded"
      >
        Generate
      </button>
    </form>
  );
}

export default Form;
