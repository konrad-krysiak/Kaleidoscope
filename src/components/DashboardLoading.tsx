import { Flex, Spinner } from "@chakra-ui/react";
import { DashboardLayout } from "./DashboardLayout";

export const DashboardLoading = () => {
  return (
    <DashboardLayout>
      <Flex h="100vh" w="100%" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Flex>
    </DashboardLayout>
  );
};
