import { Box, Flex, FormLabel, Text } from "@chakra-ui/react";
import { Field } from "formik";

export const CheckboxAttractions = () => {
  const attractionList = [
    "Monuments",
    "Nature",
    "Food",
    "Climbing",
    "Diving",
    "Beach",
    "Events",
  ];

  const attractions = attractionList.map((name, idx) => (
    <FormLabel key={idx} display="flex" gap="5px">
      <Field type="checkbox" name="Attractions" value={name} />
      <Text>{name}</Text>
    </FormLabel>
  ));

  return (
    <Box>
      <Text>Choose attractions: </Text>
      <Flex justifyContent="flex-start" wrap="wrap">
        {attractions}
      </Flex>
    </Box>
  );
};
