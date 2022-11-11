import { ChakraProvider } from "@chakra-ui/react";
import Wrapper from "@layout/index";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Script
        src="https://upload-widget.cloudinary.com/global/all.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ChakraProvider>
  );
}

export default MyApp;
