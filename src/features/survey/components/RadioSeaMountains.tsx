import { Box, Flex, FormLabel, Text } from "@chakra-ui/react";
import { Field } from "formik";

export const RadioSeaMountains = () => {
  return (
    <Box>
      <Text>What do you prefer?</Text>
      <Flex justifyContent="space-around">
        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="SeaMountains" value="Sea" />
          <Text>Sea</Text>
        </FormLabel>

        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="SeaMountains" value="Mountains" />
          <Text>Mountains</Text>
        </FormLabel>
      </Flex>
    </Box>
  );
};
