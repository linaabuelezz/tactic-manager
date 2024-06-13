import React from 'react';
import Navbar from './components/Navbar';
import { useState } from "react";
import "./App.css";
import Pitch from './components/Pitch';
import { Theme } from '@radix-ui/themes';
import AddPlayer from './components/AddPlayer';

function App() {
  return (
    <>
    <Theme>
      <Navbar />
      <Pitch />
      <AddPlayer />
    </Theme>
    </>
  );
}

export default App;
