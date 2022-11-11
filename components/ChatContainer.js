import { Box, VStack } from "@chakra-ui/react";
import ChatProfile from "./ChatProfile";

export default function ChatContainer({ chats }) {
  return (
    <Box
      bg="green.200"
      padding={5}
      h="70vh"
      overflowY="scroll"
      w={["full", "60%"]}
    >
      <VStack spacing={5}>
        {chats.map((chat) => (
          <ChatProfile
            key={chat.id}
            author={chat.author}
            img={chat.img}
            message={chat.message}
          />
        ))}
      </VStack>
    </Box>
  );
}
