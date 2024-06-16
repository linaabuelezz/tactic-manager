import { useState, useContext } from "react";
import { DialogueContext } from "../hooks/dialogueHook";

const formations = [
  {
    name: "4-3-3",
    positions: [
      { type: "defender", position: "60px", id: "1" },
      { type: "defender", position: "170px", id: "2" },
      { type: "defender", position: "340px", id: "3" },
      { type: "defender", position: "450px", id: "4" },
      { type: "midfielder", position: "110px", id: "5" },
      { type: "midfielder", position: "258px", id: "6" },
      { type: "midfielder", position: "406px", id: "7" },
      { type: "forward", position: "90px", id: "8" },
      { type: "forward", position: "258px", id: "9" },
      { type: "forward", position: "426px", id: "10" },
    ],
  },
  {
    name: "4-4-2",
    positions: [
      { type: "defender", position: "60px", id: "1" },
      { type: "defender", position: "170px", id: "2" },
      { type: "defender", position: "340px", id: "3" },
      { type: "defender", position: "450px", id: "4" },
      { type: "midfielder", position: "60px", id: "5" },
      { type: "midfielder", position: "170px", id: "6" },
      { type: "midfielder", position: "340px", id: "7" },
      { type: "midfielder", position: "450px", id: "8" },
      { type: "forward", position: "130px", id: "9" },
      { type: "forward", position: "390px", id: "10" },
    ],
  },
  {
    name: "3-4-3",
    positions: [
      { type: "defender", position: "116px", id: "1" },
      { type: "defender", position: "258px", id: "2" },
      { type: "defender", position: "400px", id: "3" },
      { type: "midfielder", position: "60px", id: "4" },
      { type: "midfielder", position: "180px", id: "5" },
      { type: "midfielder", position: "330px", id: "6" },
      { type: "midfielder", position: "450px", id: "7" },
      { type: "forward", position: "100px", id: "8" },
      { type: "forward", position: "258px", id: "9" },
      { type: "forward", position: "410px", id: "10" },
    ],
  },
  {
    name: "4-2-4",
    positions: [
      { type: "defender", position: "60px", id: "1" },
      { type: "defender", position: "180px", id: "2" },
      { type: "defender", position: "330px", id: "3" },
      { type: "defender", position: "450px", id: "4" },
      { type: "midfielder", position: "130px", id: "5" },
      { type: "midfielder", position: "390px", id: "6" },
      { type: "forward", position: "60px", id: "7" },
      { type: "forward", position: "180px", id: "8" },
      { type: "forward", position: "330px", id: "9" },
      { type: "forward", position: "450px", id: "10" },
    ],
  },
];

const Pitch = () => {
  const { openModal } = useContext(DialogueContext);
  const [selectedFormation, setSelectedFormation] = useState(formations[0]);

  const handleFormationChange = (e) => {
    const selected = formations.find(
      (formation) => formation.name === e.target.value
    );
    setSelectedFormation(selected);
  };


  return (
    <div className="flex">
      <div className="flex-1 p-4">
        <select
          className="p-2 mb-2 mr-3 border-2 border-black"
          value={selectedFormation.name}
          onChange={handleFormationChange}
        >
          {formations.map((formation, index) => (
            <option key={index} value={formation.name}>
              {formation.name}
            </option>
          ))}
        </select>
        <button
          className="text-xl bg-emerald-500 p-2 rounded-xl hover:scale-110 text-white font-roboto-condensed font-normal"
          onClick={openModal}
        >
          Add player
        </button>
        <div className="border-2 mt-2"></div>
        <div>
          <ul></ul>
        </div>
      </div>

      <div className="flex-1 mr-4">
        <div className="relative">
          <img
            alt="football pitch"
            src="/assets/football.png"
            className="my-4 ml-auto pr-9"
          />

          {selectedFormation.positions.map((position, index) => (
            <span
              key={index}
              className="absolute text-8xl hover:text-gray-300 cursor-pointer"
              style={{
                right: position.position,
                bottom: getVerticalPosition(position.type),
              }}
            >
              <strong>+</strong>
            </span>
          ))}

          <div className="absolute bottom-6 right-64 text-8xl hover:text-gray-300 cursor-pointer">
            <p>
              <strong>+</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const getVerticalPosition = (type) => {
  switch (type) {
    case "defender":
      return "125px";
    case "midfielder":
      return "360px";
    case "forward":
      return "550px";
    default:
      return "0";
  }
};

export default Pitch;
