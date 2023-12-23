import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Wordtyper.css";

const Wordtyper = () => {
  useEffect(() => {
    const options = {
      strings: ["Software Engineer"],
      typeSpeed: 50,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed(".txt", options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <span className="text-blue-700  text-2xl font-sans font-bold uppercase">
          PRADEEP PRAJAPATI
        </span>
        <br />
        <span className="txt text-3xl text-slate-600 font-sans font-bold uppercase"></span>
      </div>
    </>
  );
};

export default Wordtyper;
