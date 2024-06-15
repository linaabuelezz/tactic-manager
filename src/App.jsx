import { Theme } from "@radix-ui/themes";
import Navbar from "./components/navbar";
import "./App.css";
import Pitch from "./components/pitch";
import AddPlayer from "./components/addPlayer";

import { DialogueProvider } from "./hooks/dialogueHook";

function App() {
  return (
    <Theme>
      <DialogueProvider>
        <Navbar />
        <Pitch />
        <AddPlayer />
      </DialogueProvider>
    </Theme>
  );
}

export default App;
