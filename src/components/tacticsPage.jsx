import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const tactics = [
  {
    title: "The give-and-go",
    videoId: "S4EDBmx-Ib4",
    positions: ["Winger", "Fullback", "Midfielder"],
    pros: [
      " Breaks down defences when done effectively",
      " simplifies decision making",
      " Keeps the tempo high",
    ],
    cons: [
      " fullbacks will be pushing forward, will be vulnerable to a counter attack.",
      " players must have high endurance and discipline",
      " may be predictable",
    ],
  },
  {
    title: "The overlap",
    videoId: "5jr8i_pL8gw",
    positions: ["Fullback", "Winger"],
    pros: [
      " stretches the defence",
      " creates overload situations",
      " pressures defensive mistakes",
    ],
    cons: [
      " defensive vulnerability",
      " dependence on player skill",
      " requires high physical fitness",
    ],
  },
  {
    title: "The through ball",
    videoId: "RBpGMe-akek",
    positions: ["midfielder", "striker", "winger"],
    pros: [
      " can bypass the entire defensive line",
      " effective at breaking down defences",
      " very dangerous when played right",
    ],
    cons: [
      " requires precise timing and execution",
      " may be easily intercepted if not played well",
    ],
  },
  {
    title: "Switching the play",
    videoId: "qduV8bgebVc",
    positions: ["Fullback", "Winger", "Midfielder"],
    pros: [
      " stretches the defence",
      " creates alot more space",
      " slows down defence",
    ],
    cons: [
      " requires skill on the passing and recieving side",
      " can be a waste of play if not done correctly",
    ],
  },
  {
    title: "The cut-back",
    videoId: "0ZKDiS8E_Xw",
    positions: ["Winger", "Striker", "Fullback"],
    pros: [
      " effective against compact defences",
      " takes advantage of late-arriving players",
      " disrupts the opposing teams defensive shape",
      " reduces risk of offside",
    ],
    cons: [
      " requires high precision and timing",
      " dependent on supporting players",
      " vulnerability to counter attacks",
    ],
  },
];

const TacticsPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-8 mt-4 hover:underline hover:cursor-cell">Tactics</h1>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader size={50} color="#123abc" />
        </div>
      ) : (
        <div className="mx-auto p-4">
          <div className="space-y-8">
            {tactics.map((tactic, index) => (
              <div key={index} className="flex flex-wrap lg:flex-nowrap">
                <div className="lg:w-2/3 w-full pr-4">
                  <h2 className="text-2xl font-bold mb-2">{tactic.title}</h2>
                  <div className="aspect-w-16 aspect-h-9 mb-2">
                    <YouTube videoId={tactic.videoId} className="w-full h-full" />
                  </div>
                </div>
                <div className="lg:w-1/3 w-full lg:pl-4 mt-4 lg:mt-0 flex flex-col">
                  <div>
                    <h3 className="text-xl font-semibold mt-4 lg:mt-12">Pros:</h3>
                    <ul className="list-disc ml-5 mb-4">
                      {tactic.pros.map((pro, proIndex) => (
                        <li key={proIndex}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Cons:</h3>
                    <ul className="list-disc ml-5">
                      {tactic.cons.map((con, conIndex) => (
                        <li key={conIndex}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TacticsPage;
