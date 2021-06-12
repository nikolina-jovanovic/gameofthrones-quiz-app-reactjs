import React from "react";
import { useState } from "react";
import Quiz from "./Quiz";

const Start = ({ name }) => {
  const [displayed, setDisplayed] = useState(true);

  const continueFun = () => {
    setDisplayed(false);
  };

  return (
    <div>
      {displayed && (
        <div className="start">
          <h3 style={{ marginTop: "100px" }}>
            Hey, {name}! Let's find out are you a true fan of GoT!
          </h3>
          <button
            style={{ width: "180px" }}
            className="start-btn"
            onClick={continueFun}
          >
            Let's start!
          </button>
        </div>
      )}
      {!displayed && <Quiz name={name} />}
    </div>
  );
};

export default Start;
