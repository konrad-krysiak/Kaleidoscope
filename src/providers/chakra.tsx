import { ChakraProvider as Provider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    body: "Montserrat, Arial, sans-serif",
    heading: "Montserrat, Arial, sans-serif",
    mono: "Montserrat, Arial, monospace",
    logo: "Ubuntu, Arial",
  },
});

const ChakraProvider = ({ children }: { children: Array<JSX.Element> }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export { ChakraProvider };
