import { useState, useContext } from "react";
import { SelectPlayerContext } from "../hooks/selectPlayerHook";
import { Dialog, Button, Flex, Text } from "@radix-ui/themes";
import PropTypes from "prop-types";
import PlayerCard from "./playerCard";

const SelectPlayer = ({ players, selectedPosition, setPositionPlayers }) => {
    const filteredPlayers = players.filter(
        (player) => player.position === selectedPosition
      );
  const [selectedPlayer, setSelectedPlayer] = useState(filteredPlayers[0]?.name);
  const { isSelectOpen, closeSelect } = useContext(SelectPlayerContext);
  console.log(filteredPlayers[0]?.name)

  // Handle saving the selected player to the specified position
  const handleSave = () => {
    setPositionPlayers((prev) => ({ ...prev, [selectedPosition]: selectedPlayer }));
    console.log(selectedPlayer, selectedPosition);
  };

  return (
    <Dialog.Root open={isSelectOpen} onOpenChange={closeSelect}>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Select player</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Select the player you would like to add in this position.
        </Dialog.Description>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Players
            </Text>
            <select
            value={selectedPlayer}
              onChange={(e) => {setSelectedPlayer(e.target.value)
                console.log(e.target.value)
              }
            }
              className="border-black border-2"
            >
              <option disabled value="">
                Select a player
              </option>
              {filteredPlayers.map((player, index) => 
                { console.log(player)
                     return (<option key={index} value={player.name}>
                  {player.name}
                </option>)}
                
              )}
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
            <Button onClick={handleSave}>Save</Button>
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
      kitNumber: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedPosition: PropTypes.string,
  setPositionPlayers: PropTypes.func.isRequired,
};

export default SelectPlayer;
