import { DashboardLayout } from "@/components/DashboardLayout";
import { Box, Heading, Text } from "@chakra-ui/react";

export const DashboardView = () => {
  return (
    <DashboardLayout>
      <Box pt="20px" textAlign="center">
        <Text fontSize="30px">Welcome to Traveling Kaleidoscope</Text>
        <Text fontSize="20px">You are logged in as USER</Text>
        <Text mt="50px">
          There is no coincidence we asked you to fill survey right after your
          registration.
        </Text>
        <Text>
          Your proposed places will be calculated based on data you have
          provided.
        </Text>
        <Text pt="20px">[SURVEY DATA]</Text>
      </Box>
    </DashboardLayout>
  );
};
