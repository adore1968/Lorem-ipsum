import React from "react";

function Paragraph({ item }) {
  return (
    <>
      <p className="text-white text-center text-lg sm:text-xl mb-5 last:mb-0">
        {item}
      </p>
    </>
  );
}

export default Paragraph;
