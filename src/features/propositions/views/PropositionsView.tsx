import { AuthorizationError } from "@/components/AuthorizationError";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardLoading } from "@/components/DashboardLoading";
import { Footer } from "@/components/LandingFooter";
import { useIsAuthenticated } from "@/services/AuthService";
import { Box, Flex } from "@chakra-ui/react";
import { PlaceTiles } from "../components/PlaceTiles";

export const PropositionsView = () => {
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
    <Box>
      <DashboardLayout>
        <Flex py="50px">
          <PlaceTiles />
        </Flex>
        <Footer />
      </DashboardLayout>
    </Box>
  );
};
