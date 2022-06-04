import { Box, Flex, FormLabel, Text } from "@chakra-ui/react";
import { Field } from "formik";

export const RadioCompanionType = () => {
  return (
    <Box>
      <Text>What kind of companion do you prefer?</Text>
      <Flex justifyContent="space-around">
        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="CompanionType" value="Family" />
          <Text>Family</Text>
        </FormLabel>

        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="CompanionType" value="Partner" />
          <Text>Partner</Text>
        </FormLabel>

        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="CompanionType" value="Alone" />
          <Text>Alone</Text>
        </FormLabel>
      </Flex>
    </Box>
  );
};
