import React, {  useState } from "react";



const positionsDef = ["400px", "510px", "690px", "800px"];

const Pitch = () => {
  
    return (
    <>
      <div className="relative">
        <img
          alt="football pitch"
          src="/assets/football.png"
          className="my-4 mx-auto"
        ></img>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2  text-8xl hover:text-gray-300 cursor-pointer">
          <p >
            <strong>+</strong>
          </p>
        </div>
        <div className="absolute text-8xl w-full bottom-0">
          {positionsDef.map((positionsDef, index) => (
            <span 
              className="absolute hover:text-gray-300 cursor-pointer bottom-24"
              key={index}
              style={{ left: positionsDef }}
            >
              <strong>+</strong>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pitch;
