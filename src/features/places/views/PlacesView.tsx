import { Board } from "@/components/Board";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Footer } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import { PlaceTiles } from "../components/PlaceTiles";

export const PlacesView = () => {
  return (
    <Box>
      <DashboardLayout>
        <Flex px="60px" py="50px">
          <PlaceTiles />
        </Flex>
        <Footer />
      </DashboardLayout>
    </Box>
  );
};
