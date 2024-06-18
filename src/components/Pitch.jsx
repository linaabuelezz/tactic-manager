import { useState, useContext } from "react";
import { DialogueContext } from "../hooks/dialogueHook";
import AddPlayer from "./addPlayer";



const Pitch = () => {

  const formations = [
    {
      name: "4-3-3",
      positions: [
        { type: "defender", position: "60px", id: "RB" },
        { type: "defender", position: "170px", id: "CB 1" },
        { type: "defender", position: "340px", id: "CB 2" },
        { type: "defender", position: "450px", id: "LB" },
        { type: "midfielder", position: "110px", id: "CM 1" },
        { type: "midfielder", position: "258px", id: "CM 2" },
        { type: "midfielder", position: "406px", id: "CM 3" },
        { type: "forward", position: "90px", id: "RW" },
        { type: "forward", position: "258px", id: "ST" },
        { type: "forward", position: "426px", id: "LW" },
      ],
    },
    {
      name: "4-4-2",
      positions: [
        { type: "defender", position: "60px", id: "RB" },
        { type: "defender", position: "170px", id: "CB 1" },
        { type: "defender", position: "340px", id: "CB 2" },
        { type: "defender", position: "450px", id: "LB" },
        { type: "midfielder", position: "60px", id: "LM" },
        { type: "midfielder", position: "170px", id: "CM 1" },
        { type: "midfielder", position: "340px", id: "CM 2" },
        { type: "midfielder", position: "450px", id: "RM" },
        { type: "forward", position: "130px", id: "ST 1" },
        { type: "forward", position: "390px", id: "ST 2" },
      ],
    },
    {
      name: "3-4-3",
      positions: [
        { type: "defender", position: "116px", id: "CB 1" },
        { type: "defender", position: "258px", id: "CB 2" },
        { type: "defender", position: "400px", id: "CB 3" },
        { type: "midfielder", position: "60px", id: "LM" },
        { type: "midfielder", position: "180px", id: "CM 1" },
        { type: "midfielder", position: "330px", id: "CM 2" },
        { type: "midfielder", position: "450px", id: "RM" },
        { type: "forward", position: "100px", id: "RW" },
        { type: "forward", position: "258px", id: "ST" },
        { type: "forward", position: "410px", id: "LW" },
      ],
    },
    {
      name: "4-2-4",
      positions: [
        { type: "defender", position: "60px", id: "RB" },
        { type: "defender", position: "180px", id: "CB 1" },
        { type: "defender", position: "330px", id: "CB 2" },
        { type: "defender", position: "450px", id: "LB" },
        { type: "midfielder", position: "130px", id: "CM 1" },
        { type: "midfielder", position: "390px", id: "CM 2" },
        { type: "forward", position: "60px", id: "RW" },
        { type: "forward", position: "180px", id: "ST 1" },
        { type: "forward", position: "330px", id: "ST 2" },
        { type: "forward", position: "450px", id: "LW" },
      ],
    },
  ];

  const { openModal } = useContext(DialogueContext);
  const [selectedFormation, setSelectedFormation] = useState(formations[0]);
  const [players, setPlayers] = useState([]);

  const handleFormationChange = (e) => {
    const selected = formations.find(
      (formation) => formation.name === e.target.value
    );
    setSelectedFormation(selected);
  };

  const savePlayer = (newPlayer) => {
    setPlayers([...players, newPlayer])
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
          <ul>{players.map((player, index) => (
              <li key={index}>
                {player.name} - {player.kitNumber} ({player.position})
              </li>
            ))}</ul>
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
      <AddPlayer selectedFormation = {selectedFormation} savePlayer={savePlayer} />
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
