import { Box, Flex, FormLabel, Text } from "@chakra-ui/react";
import { Field } from "formik";

export const RadioWheelhairRamp = () => {
  return (
    <Box>
      <Text>Is wheelhair ramp needed?</Text>
      <Flex justifyContent="space-around">
        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="WheelhairRamp" value="Yes" />
          <Text>Yes</Text>
        </FormLabel>

        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="WheelhairRamp" value="No" />
          <Text>No</Text>
        </FormLabel>
      </Flex>
    </Box>
  );
};
