import { Box, Center } from "@chakra-ui/react";

export default function Wrapper({ children }) {
  return (
    <Center>
      <Box px={[5, 10]} py={[5, 10]} maxWidth={"1200px"}>
        {children}
      </Box>
    </Center>
  );
}
