
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState(() => {
    const savedPlayers = localStorage.getItem('players');
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });

  const addPlayer = (player) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers, player];
      localStorage.setItem('players', JSON.stringify(updatedPlayers));
      return updatedPlayers;
    });
  };

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  return (
    <PlayersContext.Provider value={{ players, setPlayers, addPlayer }}>
      {children}
    </PlayersContext.Provider>
  );
};

PlayersProvider.propTypes = {
  children: PropTypes.node,
};
