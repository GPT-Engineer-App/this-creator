import React, { useRef } from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/dist/excalidraw.min.css";

const Whiteboard = () => {
  const excalidrawRef = useRef(null);

  const handleSave = () => {
    if (excalidrawRef.current) {
      const data = excalidrawRef.current.getSceneElements();
      const json = JSON.stringify(data);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "whiteboard.json";
      a.click();
    }
  };

  const handleClear = () => {
    if (excalidrawRef.current) {
      excalidrawRef.current.resetScene();
    }
  };

  return (
    <Box p={4} height="100vh" display="flex" flexDirection="column">
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading size="lg">My Whiteboard</Heading>
        <Flex>
          <Button colorScheme="teal" onClick={handleSave} mr={2}>
            Save
          </Button>
          <Button colorScheme="red" onClick={handleClear}>
            Clear
          </Button>
        </Flex>
      </Flex>
      <Box flex="1" border="1px" borderColor="gray.200" borderRadius="md" overflow="hidden">
        <Excalidraw ref={excalidrawRef} />
      </Box>
    </Box>
  );
};

export default Whiteboard;