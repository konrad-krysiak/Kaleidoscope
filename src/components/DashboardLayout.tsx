import { Box, Button, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  children: React.ReactNode;
}

const NavigationItems = [
  "Dashboard",
  "Preferences",
  "Places",
  "Favourites",
  // "Search",
];

const NavigationIcons = [
  <AiOutlineHome size="14px" />,
  <IoSettingsSharp size="14px" />,
  <MdPlace size="14px" />,
  <BsFillBookmarkHeartFill size="14px" />,
  // <AiOutlineSearch size="14px" />,
];

export const DashboardLayout = ({ children }: Props) => {
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
          <Button colorScheme="red" w="100%" borderRadius="none">
            LOG OUT
          </Button>
        </Flex>
      </Flex>
      <Box w="100%" ml="250px" py="20px">
        {children}
      </Box>
    </Flex>
  );
};
