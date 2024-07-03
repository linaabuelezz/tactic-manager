import { Dialog, Button, Flex, TextField, Text } from "@radix-ui/themes";
import { useState, useContext } from "react";
import { DialogueContext } from "../hooks/DialogueHook";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const AddPlayer = ({ selectedFormation, savePlayer }) => {
  const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);
  const [playerName, setName] = useState("");
  const [kitNumber, setKitNumber] = useState("");
  const [playerPosition, setPlayerPosition] = useState("GK");

  const handleSave = () => {
    const newPlayer = {
      name: playerName,
      kitNumber: kitNumber,
      position: playerPosition,
      id: uuidv4(),
    };
    savePlayer(newPlayer);
    closeModal();
    setName("");
    setKitNumber("");
    setPlayerPosition("GK");
  };

  if (!selectedFormation) {
    return null;
  }

  return (
    <Dialog.Root
      open={modalType === "Add" && isModalOpen}
      onOpenChange={closeModal}
    >
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add player</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Input player info.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              value={playerName}
              placeholder="Enter player's name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Kit number
            </Text>
            <TextField.Root
              value={kitNumber}
              placeholder="Enter player's kit no."
              onChange={(e) => setKitNumber(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Positions
            </Text>
            {selectedFormation?.positions &&
              selectedFormation?.positions.length > 0 && (
                <select
                  value={playerPosition}
                  onChange={(e) => setPlayerPosition(e.target.value)}
                  className="border-black border-2"
                >
                  <option disabled value="Select a position.">
                    Select a position.
                  </option>
                  {selectedFormation?.positions.map((position, index) => (
                    <option key={index} value={position.id} className="">
                      {position.id}
                    </option>
                  ))}
                </select>
              )}
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

AddPlayer.propTypes = {
  selectedFormation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    positions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      kitNumber: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ),
};

export default AddPlayer;
