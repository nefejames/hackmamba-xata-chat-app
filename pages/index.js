import Head from "next/head";
import { Box, Flex, Heading } from "@chakra-ui/react";
import ChatContainer from "@components/ChatContainer";
import ChatInput from "@components/ChatInput";
import { getXataClient } from "@utils/xata";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Xata Chat App</title>
      </Head>
      <Heading as="h1" mb={5}>
        Xata Chat App
      </Heading>
      <Flex flexDir={["column", "row"]} justifyContent="space-between">
        <ChatContainer chats={data} />
        <Box>
          <ChatInput />
        </Box>
      </Flex>
    </div>
  );
}

export async function getServerSideProps() {
  const xata = getXataClient();
  const data = await xata.db.messages.getAll();

  return { props: { data } };
}
