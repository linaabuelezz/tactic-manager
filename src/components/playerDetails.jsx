import { useContext, useState, useEffect } from "react";
import { PlayersContext } from "../hooks/playerHook";

const PlayerDetails = () => {
  const { players, setPlayers } = useContext(PlayersContext);
  const [details, setDetails] = useState(() => {
    const savedDetails = localStorage.getItem("playerDetails");
    return savedDetails ? JSON.parse(savedDetails) : {};
  });

  useEffect(() => {
    localStorage.setItem("playerDetails", JSON.stringify(details));
  }, [details]);

  const handleDetailChange = (index, newDetail) => {
    const updatedDetails = { ...details, [index]: newDetail };
    setDetails(updatedDetails);
    localStorage.setItem("playerDetails", JSON.stringify(updatedDetails));
  };

  const handleDeletePlayer = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);

    
    const updatedDetails = Object.fromEntries(
      Object.entries(details)
        .filter(([key]) => parseInt(key) !== index)
        .map(([key, value], idx) => [idx, value]) 
    );

    setDetails(updatedDetails);
    localStorage.setItem("playerDetails", JSON.stringify(updatedDetails));
  };

  return (
    <>
      <h1 className="my-3 ml-2 text-4xl font-bold">Player Details</h1>
      <div>
        <ul>
          {players.map((player, index) => (
            <li key={index} className="ml-6 mb-5">
              <div className="text-2xl font-bold text-indigo-700">
                {player.name} - {player.kitNumber} ({player.position})
              </div>
              <h2 className="text-m">
                Add any relevant details about the player:
              </h2>
              <input
                type="text"
                placeholder="e.g., Is injured and will be back on the 27th"
                value={details[index] || ""}
                onChange={(e) => handleDetailChange(index, e.target.value)}
                className="border-2 border-black rounded-md text-md w-3/4 px-4 font-bold"
              />
              <button
                onClick={() => {
                  handleDeletePlayer(index);
                }}
                className="text-white bg-red-500 px-4 py-1 font-bold hover:scale-110 rounded-md ml-2.5 "
              >
                Delete Player
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PlayerDetails;
