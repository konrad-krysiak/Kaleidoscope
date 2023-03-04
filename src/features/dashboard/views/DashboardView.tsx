import { AuthorizationError } from "@/components/AuthorizationError";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardLoading } from "@/components/DashboardLoading";
import { useIsAuthenticated } from "@/services/AuthService";
import { User } from "@/types/User";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";

export const DashboardView = () => {
  // const { isAuthenticated, isLoading, isError } = useIsAuthenticated();
  const isAuthenticated = true;
  const isLoading = false;
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const storageUser = (JSON.parse(localStorage.getItem("user") || "[]") ||
      {}) as User;
    setUser(storageUser);
  }, []);

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
      {isLoading ? (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translateY(-50%)"
        >
          <Audio height="100" width="100" color="grey" ariaLabel="loading" />
        </Box>
      ) : isAuthenticated ? (
        <Box pt="20px" textAlign="center">
          <Text fontSize="30px">
            Welcome to Traveling Kaleidoscope {user ? user.name : null}!
          </Text>
          {user ? (
            <Text fontSize="20px">You are logged in as {user.email}</Text>
          ) : null}
          <Text mt="50px">
            There is no coincidence we asked you to fill survey right after your
            registration.
          </Text>
          <Text>
            Your proposed places will be calculated based on data you have
            provided.
          </Text>
        </Box>
      ) : (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translateY(-50%)"
        >
          You are not authenticated.
        </Box>
      )}
    </DashboardLayout>
  );
};
