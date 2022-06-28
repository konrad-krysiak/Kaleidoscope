import { authService, useIsAuthenticated } from "@/services/AuthService";
import { Box, Flex, useDisclosure, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Oval } from "react-loader-spinner";
import { SignModal } from "./SignModal";

export const Navbar = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useIsAuthenticated();
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
  return isLoading ? (
    <Flex justifyContent="center" textAlign="center" py="10px">
      <Oval height="30" color="grey" ariaLabel="loading" />
    </Flex>
  ) : !isAuthenticated ? (
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

        <Link href="/dashboard">dashboard</Link>

        <Text cursor="pointer" onClick={onOpenLogin}>
          LOGIN
        </Text>
        <Text cursor="pointer" onClick={onOpenRegister}>
          REGISTER
        </Text>
      </Flex>
      <SignModal isLogin={true} isOpen={isOpenLogin} onClose={onCloseLogin} />
      <SignModal
        isLogin={false}
        isOpen={isOpenRegister}
        onClose={onCloseRegister}
      />

      <Box borderTop="1px solid #e0e0e0" w="80%" m="0 auto"></Box>
    </Box>
  ) : (
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

        <Link href="/dashboard">dashboard</Link>

        <Text
          cursor="pointer"
          onClick={() => {
            authService
              .logout()
              .then(() => {
                router.reload();
              })
              .catch((e) => {
                console.log("error while logging out");
                console.log(e);
              });
          }}
        >
          LOGOUT
        </Text>
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
