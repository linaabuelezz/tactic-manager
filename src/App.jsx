import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import { Theme } from "@radix-ui/themes";
import "./App.css";
import Pitch from "./components/pitch";
import PlayerDetails from "./components/playerDetails";
import { DialogueProvider } from "./hooks/dialogueHook";
import { SelectPlayerProvider } from "./hooks/selectPlayerHook";
import { PlayersProvider } from "./hooks/playerHook"; // Import the context

function App() {
  return (
    <Theme>
      <PlayersProvider>
        <DialogueProvider>
          <SelectPlayerProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Pitch />} />
                <Route path="/player-details" element={<PlayerDetails />} />
              </Routes>
            </Router>
          </SelectPlayerProvider>
        </DialogueProvider>
      </PlayersProvider>
    </Theme>
  );
}

export default App;
