import { useState, useContext, useEffect } from "react";
import { SelectPlayerContext } from "../hooks/selectPlayerHook";
import { Dialog, Button, Flex, Text } from "@radix-ui/themes";
import PropTypes from "prop-types";

const SelectPlayer = ({ players, selectedPosition }) => {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const { isSelectOpen, closeSelect } =
    useContext(SelectPlayerContext);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    useEffect(() => {
        
        if (selectedPosition) {
          const playersFiltered = players.filter(
            (player) => player.position === selectedPosition
          );
          setFilteredPlayers(playersFiltered);
        } else {
          setFilteredPlayers(players);
        }
      }, [selectedPosition, players]);

      const handleSave = () => {
        // Handle save logic here
        closeSelect(); // Close the select player dialog
      };

  return (
    <Dialog.Root open={isSelectOpen} onOpenChange={closeSelect}>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Select player</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Select player you would like to add in this position.
        </Dialog.Description>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Positions
            </Text>
            <select
              value={selectedPlayer}
              onChange={(e) => setSelectedPlayer(e.target.value)}
              className="border-black border-2"
            >
              <option disabled value="Select a position.">
                Select a player.
              </option>
              {filteredPlayers.map((player, index) => (
                <option key={index} value={player.name} className="">
                  {player.name}
                </option>
              ))}
            </select>
          </label>
        </Flex>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

SelectPlayer.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      kitNumber: PropTypes.number.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectPlayer;
