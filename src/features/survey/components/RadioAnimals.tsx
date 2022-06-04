import { Box, Flex, FormLabel, Text } from "@chakra-ui/react";
import { Field } from "formik";

export const RadioAnimals = () => {
  return (
    <Box>
      <Text>Do you prefer places adapted to the animals?</Text>
      <Flex justifyContent="space-around">
        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="Animals" value="Yes" />
          <Text>Yes</Text>
        </FormLabel>

        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="Animals" value="No" />
          <Text>No</Text>
        </FormLabel>
      </Flex>
    </Box>
  );
};
