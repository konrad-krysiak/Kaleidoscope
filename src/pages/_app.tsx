import { Fonts } from "@/fonts/Fonts";
import { ChakraProvider } from "@/providers/chakra";
import type { AppProps } from "next/app";
import "react-widgets/styles.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
