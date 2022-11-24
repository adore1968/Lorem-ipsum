import React, { createContext, useContext, useState } from "react";
import data from "../data";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [formText, setFormText] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formText <= 0) {
      const newParagraphs = data.slice(0, 1);
      setParagraphs(newParagraphs);
    } else if (formText > data.length - 1) {
      const newParagraphs = data.slice(0, data.length - 1);
      setParagraphs(newParagraphs);
    } else {
      const newParagraphs = data.slice(0, formText);
      setParagraphs(newParagraphs);
    }
    setFormText(0);
  };

  return (
    <AppContext.Provider
      value={{ formText, setFormText, paragraphs, handleSubmit }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
