import { Box } from "@chakra-ui/react";

export const CityTag = ({ title }: { title: string }) => {
  return (
    <Box
      bgColor="#ebeaea"
      p="5px"
      borderRadius="2px"
      fontSize="12"
      textTransform="uppercase"
    >
      {title}
    </Box>
  );
};
