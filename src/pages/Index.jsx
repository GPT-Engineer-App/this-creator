import { Box, Button, Container, Flex, Heading, Image, Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaDiscord, FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
        <Box w={{ base: "100%", md: "30%" }} p={4} bg="gray.800" color="white" borderRadius="md">
          <Heading size="md" mb={4}>Find cos(β) in the triangle. Choose 1 answer:</Heading>
          <RadioGroup>
            <Stack direction="column">
              <Radio value="1">4/5</Radio>
              <Radio value="2">4/3</Radio>
              <Radio value="3">3/5</Radio>
              <Radio value="4">3/4</Radio>
            </Stack>
          </RadioGroup>
          <VStack spacing={4} mt={6}>
            <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid" width="100%">
              Watch Tutorial
            </Button>
            <Button leftIcon={<FaDiscord />} colorScheme="teal" variant="solid" width="100%">
              Join Discord Community
            </Button>
            <Button leftIcon={<FaApple />} colorScheme="teal" variant="solid" width="100%">
              Download iOS App
            </Button>
          </VStack>
        </Box>
        <Box w={{ base: "100%", md: "60%" }} p={4}>
          <Image src="/images/triangle-diagram.png" alt="Triangle Diagram" mb={4} />
          <Heading size="md" mb={4}>Find cos(β) in the triangle.</Heading>
          <Text mb={4}>Choose 1 answer:</Text>
          <RadioGroup>
            <Stack direction="column">
              <Radio value="1">4/5</Radio>
              <Radio value="2">4/3</Radio>
              <Radio value="3">3/5</Radio>
              <Radio value="4">3/4</Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Flex>
      <Flex justify="center" mt={6}>
        <Button colorScheme="purple" mr={4}>Ask For Help</Button>
        <Button variant="outline" colorScheme="purple">Clear Canvas</Button>
      </Flex>
    </Container>
  );
};

export default Index;