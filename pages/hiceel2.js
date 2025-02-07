import React, { useState } from "react";
const useStateHook = () => {
  const [color, setColor] = useState("");
  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
      <p>Ungu solih</p>
      <button
        className="border bg-red-800 py-4 ps-6"
        onClick={() => {
          setColor("red");
        }}
      >
        Ulaan
      </button>
      {color == "red" ? null : color == "blue" ? null : color== "green" ? null: <button>hll</button> }

      <button
        className="border bg-white py-4 ps-6"
        onClick={() => {
          setColor("white");
        }}
      >
        clear
      </button>
      
    </div>
  );
};
export default useStateHook;
