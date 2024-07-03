import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import "./App.css";
import PlayerDetails from "./components/playerDetails";
import { DialogueProvider } from "./hooks/dialogueHook";
import { PlayersProvider } from "./hooks/playerHook";
import TacticsPage from "./components/tacticsPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import Navbar from "./components/navbar.jsx";
import Pitch from "./components/pitch.jsx";
function App() {
  return (
    <Theme>
      <PlayersProvider>
        <DialogueProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/tactic-manager" element={<Pitch />} />
                <Route path="/player-details" element={<PlayerDetails />} />
                <Route path="/tactics-page" element={<TacticsPage />} />
                <Route path="/about-page" element={<AboutPage />} />
              </Routes>
            </Router>
        </DialogueProvider>
      </PlayersProvider>
    </Theme>
  );
}

export default App;
