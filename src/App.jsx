import React from "react";
import Form from "./components/Form";
import Paragraphs from "./components/Paragraphs";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <section className="px-5 sm:px-8 flex justify-center py-8">
        <div>
          <h1 className="text-center text-2xl sm:text-4xl font-bold uppercase mb-5 text-white">
            Tired of lorem ipsum?
          </h1>
          <Form />
          <Paragraphs />
        </div>
      </section>
    </div>
  );
}

export default App;
