import { useState, useContext } from "react";
import { Dialog, Button, Flex, Text } from "@radix-ui/themes";
import PropTypes from "prop-types";
import { DialogueContext } from "../hooks/dialogueHook";

const SelectPlayer = ({ players, selectedPosition, setDisplayedPlayers }) => {
  const filteredPlayers = players.filter(
    (player) => player.position === selectedPosition
  );
  const [selectedPlayer, setSelectedPlayer] = useState(
    filteredPlayers[0] || ""
  );
  const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);

  const handleSave = (e) => {
    e.preventDefault();
    const selectedPlayer = e.target.selectedPlayer.value;
    setSelectedPlayer(selectedPlayer);
    const foundPlayer = filteredPlayers.find((chosenPlayer) => {
      return chosenPlayer.id === selectedPlayer;
    });
    setDisplayedPlayers((prev) => [...prev, foundPlayer]);
  };

  return (
    <Dialog.Root open={modalType === "Select" && isModalOpen} onOpenChange={closeModal}>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Select player</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Select the player you would like to add in this position.
        </Dialog.Description>
        <form onSubmit={handleSave}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Players
              </Text>

              <select
                // value={selectedPlayer}
                name="selectedPlayer"
                defaultValue={filteredPlayers[0]?.id || ""}
                className="border-black border-2"
              >
                <option disabled value="">
                  Select a player
                </option>
                {filteredPlayers.map((player, index) => (
                  //  console.log(player)
                  <option key={index} value={player.id}>
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
              <Button type="submit">Save</Button>
            </Dialog.Close>
          </Flex>
        </form>
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
  setDisplayedPlayers: PropTypes.func.isRequired,
};

export default SelectPlayer;
