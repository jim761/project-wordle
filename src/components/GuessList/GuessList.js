import React, { useState } from "react";

function GuessList({ input }) {
  return (
    <div className="guess-results">
      {input.map(({ name, id }) => (
        <p className="guess" key={id}>
          {name}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
