import { AuthorizationError } from "@/components/AuthorizationError";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardLoading } from "@/components/DashboardLoading";
import { useIsAuthenticated } from "@/services/AuthService";
import { Box, Flex, Spinner } from "@chakra-ui/react";

export const FavouritesView = () => {
  const { isAuthenticated, isLoading, isError } = useIsAuthenticated();
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
        Favourites
      </Box>
    </DashboardLayout>
  );
};
