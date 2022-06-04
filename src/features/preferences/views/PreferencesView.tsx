import { DashboardLayout } from "@/components/DashboardLayout";
import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";

export const PreferencesView = () => {
  return (
    <DashboardLayout>
      <Box pt="20px" textAlign="center" fontSize="30px">
        Preferences
      </Box>
      <Box textAlign="center" py="40px" borderBottom="1px solid #e0e0e0">
        <FormLabel htmlFor="password" textAlign="center">
          New password
        </FormLabel>
        <Input id="password" type="text" w="200px" />
        <FormLabel htmlFor="confirmpassword" textAlign="center" mt="20px">
          Confirm password
        </FormLabel>
        <Input id="confirmpassword" type="text" w="200px" />
        <Box pt="20px">
          <Button colorScheme="green">Change password</Button>
        </Box>
      </Box>

      <Box textAlign="center" mt="20px">
        <Text>
          You can change your place preferences, which will cause our
          application to propose you other places.
        </Text>
        <Box mt="20px">
          <Button colorScheme="blue">REFILL THE SURVEY</Button>
        </Box>
      </Box>
    </DashboardLayout>
  );
};
