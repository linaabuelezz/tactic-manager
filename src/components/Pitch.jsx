import { useState, useContext } from "react";
import { DialogueContext } from "../hooks/DialogueHook.jsx";
import AddPlayer from "./AddPlayer.jsx";
import SelectPlayer from "./SelectPlayer.jsx";
import { PlayersContext } from "../hooks/PlayerHook.jsx";
import PlayerCard from "./PlayerCard.jsx";

const Pitch = () => {
  const formations = [
    {
      name: "4-3-3",
      positions: [
        { type: "goalkeeper", position: "258px", id: "GK" },
        { type: "defender", position: "60px", id: "RB" },
        { type: "defender", position: "170px", id: "RCB" },
        { type: "defender", position: "340px", id: "LCB" },
        { type: "defender", position: "450px", id: "LB" },
        { type: "midfielder", position: "110px", id: "RCM" },
        { type: "midfielder", position: "258px", id: "CM" },
        { type: "midfielder", position: "406px", id: "LCM" },
        { type: "forward", position: "90px", id: "RW" },
        { type: "forward", position: "258px", id: "ST" },
        { type: "forward", position: "426px", id: "LW" },
      ],
    },
    {
      name: "3-4-3",
      positions: [
        { type: "goalkeeper", position: "258px", id: "GK" },
        { type: "defender", position: "116px", id: "RCB" },
        { type: "defender", position: "258px", id: "CB" },
        { type: "defender", position: "400px", id: "LCB" },
        { type: "midfielder", position: "60px", id: "RM" },
        { type: "midfielder", position: "180px", id: "RCM" },
        { type: "midfielder", position: "330px", id: "LCM" },
        { type: "midfielder", position: "450px", id: "LM" },
        { type: "forward", position: "100px", id: "RW" },
        { type: "forward", position: "258px", id: "ST" },
        { type: "forward", position: "410px", id: "LW" },
      ],
    },
    {
      name: "4-4-2",
      positions: [
        { type: "goalkeeper", position: "258px", id: "GK" },
        { type: "defender", position: "60px", id: "RB" },
        { type: "defender", position: "170px", id: "RCB" },
        { type: "defender", position: "340px", id: "LCB" },
        { type: "defender", position: "450px", id: "LB" },
        { type: "midfielder", position: "60px", id: "RM" },
        { type: "midfielder", position: "170px", id: "RCM" },
        { type: "midfielder", position: "340px", id: "LCM" },
        { type: "midfielder", position: "450px", id: "LM" },
        { type: "forward", position: "130px", id: "ST 1" },
        { type: "forward", position: "390px", id: "ST 2" },
      ],
    },
    {
      name: "4-2-4",
      positions: [
        { type: "goalkeeper", position: "258px", id: "GK" },
        { type: "defender", position: "60px", id: "RB" },
        { type: "defender", position: "180px", id: "RCB" },
        { type: "defender", position: "330px", id: "LCB" },
        { type: "defender", position: "450px", id: "LB" },
        { type: "midfielder", position: "130px", id: "RCM" },
        { type: "midfielder", position: "390px", id: "LCM" },
        { type: "forward", position: "60px", id: "RW" },
        { type: "forward", position: "180px", id: "R ST" },
        { type: "forward", position: "330px", id: "L ST" },
        { type: "forward", position: "450px", id: "LW" },
      ],
    },
  ];

  const { openModal } = useContext(DialogueContext);
  const { players, addPlayer } = useContext(PlayersContext);
  const [selectedFormation, setSelectedFormation] = useState(formations[0]);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [displayedPlayers, setDisplayedPlayers] = useState([]);

  const isPlayerFound = (positionId) => {
    const foundPlayer = displayedPlayers.find(
      (player) => player.position === positionId
    );
    return foundPlayer;
  };

  const handleFormationChange = (e) => {
    const selected = formations.find(
      (formation) => formation.name === e.target.value
    );
    setSelectedFormation(selected);
  };

  const handlePlusClick = (positionId) => {
    openModal("Select");
    setSelectedPosition(positionId);
  };

  return (
    <div className="flex">
      <div className="flex-1 p-4">
        <select
          className="p-2 mb-2 mr-3 border-2 border-black font-semibold"
          value={selectedFormation.name}
          onChange={handleFormationChange}
        >
          {formations.map((formation, index) => (
            <option
              key={index}
              value={formation.name}
              className="font-semibold"
            >
              {formation.name}
            </option>
          ))}
        </select>
        <button
          className="text-xl bg-emerald-500 p-2 rounded-xl hover:scale-110 text-white font-roboto-condensed font-normal"
          onClick={() => {
            openModal("Add");
          }}
        >
          Add player
        </button>
        <div className="border-2 mt-2"></div>
        <div>
          <ul>
            {players.map((player, index) => (
              <div key={index} className="border-2 border-black mt-2 p-1">
                <li className="text-lg font-roboto-condensed font-bold ">
                  {player.name} - {player.kitNumber} ({player.position})
                </li>
              </div>
            ))}
          </ul>
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
            <div
              key={index}
              className="absolute cursor-pointer z-1"
              style={{
                right: position.position,
                bottom: getVerticalPosition(position.type),
              }}
              onClick={() => handlePlusClick(position.id)}
            >
              {isPlayerFound(position.id) ? (
                <PlayerCard player={isPlayerFound(position.id)} />
              ) : (
                <strong className="text-8xl hover:text-gray-300">+</strong>
              )}
            </div>
          ))}
        </div>
      </div>
      <AddPlayer
        selectedFormation={selectedFormation}
        savePlayer={addPlayer}
        players={players}
      />
      <SelectPlayer
        players={players}
        selectedPosition={selectedPosition}
        setDisplayedPlayers={setDisplayedPlayers}
      />
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
    case "goalkeeper":
      return "20px";
    default:
      return "0";
  }
};

export default Pitch;
