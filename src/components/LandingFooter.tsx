import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex direction="row" py="15px" borderTop="1px solid #e0e0e0" mt="100px">
      <Box ml="auto" px="20%">
        <Text pb="5px">Visit our:</Text>
        <Flex direction="row" gap="10px">
          <Image
            src="/facebook.svg"
            alt="facebook icon"
            width="20px"
            height="20px"
          />
          <Text>Facebook</Text>
        </Flex>
        <Flex direction="row" gap="10px">
          <Image
            src="/instagram.svg"
            alt="instagram icon"
            width="20px"
            height="20px"
          />
          <Text>Instagram</Text>
        </Flex>
        <Flex direction="row" gap="10px">
          <Image
            src="/twitter.svg"
            alt="twitter icon"
            width="20px"
            height="20px"
          />
          <Text>Twitter</Text>
        </Flex>
      </Box>
    </Flex>
  );
};
