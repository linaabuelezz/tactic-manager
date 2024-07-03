import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import "./App.css";
import PlayerDetails from "./components/PlayerDetails.jsx";
import { DialogueProvider } from "./hooks/DialogueHook.jsx";
import { PlayersProvider } from "./hooks/PlayerHooktemp.jsx";
import TacticsPage from "./components/TacticsPagetemp.jsx";
import AboutPage from "./components/AboutPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Pitch from "./components/Pitch.jsx";
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
