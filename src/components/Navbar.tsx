import { Box, Flex, useDisclosure, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SignModal } from "./SignModal";

export const Navbar = () => {
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();
  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
  } = useDisclosure();
  return (
    <Box>
      <Flex
        direction="row"
        fontFamily="Bebas Neue"
        justifyContent="center"
        gap={["20px", "20px", "30px", "40px", "50px"]}
        fontSize="18px"
        py="15px"
        color="#000"
      >
        <Link href="/">HOME</Link>

        <Text cursor="pointer" onClick={onOpenLogin}>
          LOGIN
        </Text>

        <Text cursor="pointer" onClick={onOpenRegister}>
          REGISTER
        </Text>

        {/* USER MUST BE LOGGED IN */}
        <Link href="/dashboard">dashboard</Link>

        <Link href="/">ABOUT</Link>
      </Flex>
      <SignModal isLogin={true} isOpen={isOpenLogin} onClose={onCloseLogin} />
      <SignModal
        isLogin={false}
        isOpen={isOpenRegister}
        onClose={onCloseRegister}
      />
      <Box borderTop="1px solid #e0e0e0" w="80%" m="0 auto"></Box>
    </Box>
  );
};
