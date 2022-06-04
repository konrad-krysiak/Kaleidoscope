import { Flex, Heading, Box } from "@chakra-ui/react";

interface LandingSectionProps {
  title: string;
  children: React.ReactNode;
}

export const LandingSection = ({ title, children }: LandingSectionProps) => {
  return (
    <Flex
      px={["50px", "80px", "100px", "150px", "250px"]}
      direction="column"
      textAlign="justify"
      py="20px"
    >
      <Heading fontSize="25px" fontWeight="600" py="20px" textAlign="center">
        {title}
      </Heading>
      <Box fontSize={["16px", "17px", "18px", "20px"]}>{children}</Box>
    </Flex>
  );
};
