import { Box, Flex, FormLabel, Text } from "@chakra-ui/react";
import { Field } from "formik";

export const RadioCityType = () => {
  return (
    <Box>
      <Text>Which kind of city do you prefer?</Text>
      <Flex justifyContent="space-around">
        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="CityType" value="City" />
          <Text>City</Text>
        </FormLabel>

        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="CityType" value="Country town" />
          <Text>Country town</Text>
        </FormLabel>

        <FormLabel display="flex" gap="5px">
          <Field type="radio" name="CityType" value="Metropolis" />
          <Text>Metropolis</Text>
        </FormLabel>
      </Flex>
    </Box>
  );
};
