import { Fonts } from "@/fonts/Fonts";
import { ChakraProvider } from "@/providers/chakra";
import type { AppProps } from "next/app";
import "react-widgets/styles.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
