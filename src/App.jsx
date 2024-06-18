import { Theme } from "@radix-ui/themes";
import Navbar from "./components/navbar";
import "./App.css";
import Pitch from "./components/pitch";
import AddPlayer from "./components/addPlayer";

import { DialogueProvider } from "./hooks/dialogueHook";
import { SelectPlayerProvider } from "./hooks/selectPlayerHook";

function App() {
  return (
    <Theme>
      <DialogueProvider>
        <SelectPlayerProvider>
        <Navbar />
        <Pitch />
        <AddPlayer />
        </SelectPlayerProvider>
      </DialogueProvider>
    </Theme>
  );
}

export default App;
