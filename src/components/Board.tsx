import { Box, Flex, Text } from "@chakra-ui/react";
import styles from "./Board.module.css";

export const Board = () => {
  return (
    <Box w="100%" h="70vh" backgroundColor="#000" pos="relative">
      <Box className={styles.board_container_bg}>
        <Box className={styles.board_container_bg_gradient}></Box>
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        h="100%"
        position="relative"
        flexDirection="column"
      >
        <Text
          color="#fff"
          fontSize="45px"
          letterSpacing="5px"
          fontFamily="Georama"
        >
          KALEIDOSCOPE
        </Text>
        <Text color="#fff" fontFamily="Zilla Slab" fontSize="15px">
          FOR THOSE WHO SEEK ADVENTURES
        </Text>
      </Flex>
    </Box>
  );
};
