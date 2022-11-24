import React from "react";
import { useGlobalContext } from "../context/AppContext";
import Paragraph from "./Paragraph";

function Paragraphs() {
  const { paragraphs } = useGlobalContext();
  return (
    <div>
      {paragraphs.map((item, index) => {
        return <Paragraph key={index} item={item} />;
      })}
    </div>
  );
}

export default Paragraphs;
