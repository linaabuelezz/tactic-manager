import React, {  useContext, useState } from "react";
import PropTypes from 'prop-types';
import AddPlayer from "./addPlayer";
import { DialogueContext } from "../hooks/dialogueHook";



const positionsDef = ["400px", "510px", "690px", "800px"];

const Pitch = () => {
  const { openModal } = useContext(DialogueContext);
  
    return (
    <>
      <div className="relative">
        <img
          alt ="football pitch"
          src ="/assets/football.png"
          className ="my-4 mx-auto"
        ></img>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2  text-8xl hover:text-gray-300 cursor-pointer">
          <p onClick={openModal}>
            <strong>+</strong>
          </p>
        </div>
        <div className="absolute text-8xl w-full bottom-0">
          {positionsDef.map((positionsDef, index) => (
            <span 
              className="absolute hover:text-gray-300 cursor-pointer bottom-24"
              key={index}
              style={{ left: positionsDef }}
              onClick={openModal}
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
