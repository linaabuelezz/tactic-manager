import { useContext } from "react";
import { DialogueContext } from "../hooks/dialogueHook";

const positionsDef = ["60px", "160px", "350px", "450px"];
const positionsMid = ["110px", "258px", "406px"];
const positionsFwd = ["90px", "258px", "426px"];

const Pitch = () => {
  const { openModal } = useContext(DialogueContext);

  return (
    <div className="flex">
      <div className="flex-1 p-4">
        <button className="font-mono text-xl bg-slate-500 p-2 rounded-xl hover:scale-110 text-white" onClick={openModal}>Add player</button>
        <div className="border-2 mt-2"></div>
        <div>
          <ul></ul>
        </div>
      </div>

      <div className="flex-1 mr-8">
        <div className="relative">
          <img
            alt="football pitch"
            src="/assets/football.png"
            className="my-4 ml-auto pr-9"
          />

          <div className="absolute text-8xl w-full bottom-0">
            {positionsDef.map((position, index) => (
              <span
                className="absolute hover:text-gray-300 cursor-pointer bottom-24"
                key={index}
                style={{ right: position }}
              >
                <strong>+</strong>
              </span>
            ))}
          </div>

          <div className="absolute text-8xl w-full top-30">
            {positionsMid.map((position, index) => (
              <span
                className="absolute hover:text-gray-300 cursor-pointer bottom-80"
                key={index}
                style={{ right: position }}
              >
                <strong>+</strong>
              </span>
            ))}
          </div>

          <div className="absolute text-8xl w-full top-0">
            {positionsFwd.map((position, index) => (
              <span
                className="absolute hover:text-gray-300 cursor-pointer top-36"
                key={index}
                style={{ right: position }}
              >
                <strong>+</strong>
              </span>
            ))}
          </div>

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

export default Pitch;
