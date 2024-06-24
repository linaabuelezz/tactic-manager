import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import { Theme } from "@radix-ui/themes";
import "./App.css";
import Pitch from "./components/pitch";
import PlayerDetails from "./components/playerDetails";
import { DialogueProvider } from "./hooks/dialogueHook";
import { PlayersProvider } from "./hooks/playerHook";
function App() {
  return (
    <Theme>
      <PlayersProvider>
        <DialogueProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Pitch />} />
                <Route path="/player-details" element={<PlayerDetails />} />
              </Routes>
            </Router>
        </DialogueProvider>
      </PlayersProvider>
    </Theme>
  );
}

export default App;
