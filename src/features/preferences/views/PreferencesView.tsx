import { AlertDialogComponent } from "@/components/AlertDialogComponent";
import { AuthorizationError } from "@/components/AuthorizationError";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardLoading } from "@/components/DashboardLoading";
import { authService, useIsAuthenticated } from "@/services/AuthService";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { changePassword } from "../api/changePassword";

export const PreferencesView = () => {
  const { isAuthenticated, isLoading, isError } = useIsAuthenticated();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changeStatus, setChangeStatus] = useState(false);
  const [changeMessage, setChangeMessage] = useState("");
  const {
    isOpen: isAlertDialogOpen,
    onOpen: onAlertDialogOpen,
    onClose: onAlertDialogClose,
  } = useDisclosure();
  if (isLoading) {
    return <DashboardLoading />;
  }

  if (!isLoading && !isAuthenticated) {
    return (
      <DashboardLayout>
        <AuthorizationError />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Box pt="20px" textAlign="center" fontSize="30px">
        Preferences
      </Box>
      <Box textAlign="center" py="40px" borderBottom="1px solid #e0e0e0">
        <FormLabel htmlFor="password" textAlign="center">
          New password
        </FormLabel>
        <Input
          id="password"
          type="text"
          w="200px"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormLabel htmlFor="confirmpassword" textAlign="center" mt="20px">
          Confirm password
        </FormLabel>
        <Input
          id="confirmpassword"
          type="text"
          w="200px"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Box pt="20px">
          <Button
            colorScheme="green"
            onClick={() => {
              onAlertDialogOpen();
              changePassword(password, confirmPassword).then((res) => {
                if (!res) {
                  setChangeMessage("Password does not match.");
                } else {
                  setChangeMessage("Password changed successfully.");
                }
                setChangeStatus(true);
              });
            }}
          >
            Change password
          </Button>
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
      <AlertDialogComponent
        title="Change password"
        message={
          changeStatus ? (
            changeMessage
          ) : (
            <Box textAlign="center">
              <Spinner size="lg" />
            </Box>
          )
        }
        isOpen={isAlertDialogOpen}
        onOpen={onAlertDialogOpen}
        onClose={onAlertDialogClose}
      />
    </DashboardLayout>
  );
};
