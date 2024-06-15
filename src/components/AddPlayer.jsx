import { Dialog, Button, Flex, TextField, Text } from "@radix-ui/themes";
import { useState, useContext } from "react";
import Pitch from "./pitch";
import { DialogueContext } from "../hooks/dialogueHook";

const AddPlayer = () => {
  const { isModalOpen, closeModal } = useContext(DialogueContext);
  const [name, setName] = useState("");
  const [kitNumber, setKitNumber] = useState("");

  const handleSave = () => {
    console.log("Player Name:", name);
    console.log("Kit Number:", kitNumber);
    closeModal();
  };

  return (
    <Dialog.Root
      open={isModalOpen}
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
              value={name}
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

export default AddPlayer;
