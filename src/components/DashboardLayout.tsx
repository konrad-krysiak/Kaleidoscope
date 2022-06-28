import { Box, Button, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillDashboard, AiOutlineHome } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { authService } from "@/services/AuthService";
import { FaPlaceOfWorship } from "react-icons/fa";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

const NavigationItems = [
  "Home",
  "Dashboard",
  "Preferences",
  "Places",
  "Propositions",
];

const NavigationIcons = [
  <AiOutlineHome size="14px" key={0} />,
  <AiFillDashboard size="14px" key={1} />,
  <IoSettingsSharp size="14px" key={2} />,
  <MdPlace size="14px" key={3} />,
  <FaPlaceOfWorship size="14px" key={4} />,
];

export const DashboardLayout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <Flex>
      <Flex
        w="250px"
        h="100vh"
        flexDirection="column"
        overflow="hidden"
        backgroundColor="rgb(37, 43, 37)"
        boxShadow="3px 0px 9px -3px rgba(66, 68, 90, 1)"
        position="fixed"
      >
        <Flex
          fontFamily="Dancing Script"
          fontSize="28px"
          height="80px"
          color="#ffffff"
          userSelect="none"
          justifyContent="center"
          alignItems="center"
        >
          Traveling Kaleidoscope
        </Flex>

        <UnorderedList listStyleType="none">
          {NavigationItems.map((item, idx) => (
            <ListItem
              key={idx}
              borderBottom="1px solid rgb(59, 54, 54)"
              pl="15%"
              fontSize="13px"
              color="#ffffff"
              lineHeight="35px"
              fontWeight="600"
              display="flex"
              alignItems="center"
              gap="5px"
              _hover={{
                backgroundColor: "#ffffff",
                transition: "background-color .2s linear",
                color: "#000000",
              }}
            >
              {NavigationIcons[idx]}
              <Link href={`/${item.toLocaleLowerCase()}`}>{item}</Link>
            </ListItem>
          ))}
        </UnorderedList>

        <Flex mt="auto">
          <Button
            colorScheme="red"
            w="100%"
            borderRadius="none"
            onClick={() => {
              authService
                .logout()
                .then(() => {
                  router.push("/");
                })
                .catch((e) => {
                  console.log("error while logging out");
                  console.log(e);
                });
            }}
          >
            LOG OUT
          </Button>
        </Flex>
      </Flex>
      <Box h="100vh" w="100%" ml="250px" position="relative">
        {children}
      </Box>
    </Flex>
  );
};
