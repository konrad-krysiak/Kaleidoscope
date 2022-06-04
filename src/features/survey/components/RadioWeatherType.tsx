import { Box, Flex, FormLabel, Text } from "@chakra-ui/react";
import { Field } from "formik";

export const RadioWeatherType = () => {
  const weatherType = ["Hot", "Warm", "Moderate", "Cold", "Frost"];

  const weather = weatherType.map((weather, idx) => (
    <FormLabel key={idx} display="flex" gap="5px">
      <Field type="radio" name="WeatherType" value={weather} />
      <Text>{weather}</Text>
    </FormLabel>
  ));

  return (
    <Box>
      <Text>What kind of rest type do you prefer?</Text>
      <Flex justifyContent="space-around">{weather}</Flex>
    </Box>
  );
};
