import { Box, Flex, FormLabel, Text } from "@chakra-ui/react";
import { Field } from "formik";

export const RadioRestType = () => {
  return (
    <Box>
      <Text>What kind of rest type do you prefer?</Text>
      <Flex justifyContent="space-around">
        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="RestType" value="Touring" />
          <Text>Touring</Text>
        </FormLabel>

        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="RestType" value="Repose" />
          <Text>Repose</Text>
        </FormLabel>

        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="RestType" value="Active repose" />
          <Text>Active repose</Text>
        </FormLabel>
      </Flex>
    </Box>
  );
};
