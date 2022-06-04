import { Box, Button, FormLabel, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { FormikValuesInterface } from "../views/SurveyView";

interface InputVisitedCitiesProps {
  setFieldValue: (field: string, value: any, shouldValidate?: any) => void;
  formikValues: FormikValuesInterface;
}

export const InputVisitedCities = ({
  setFieldValue,
  formikValues,
}: InputVisitedCitiesProps) => {
  const [cityValue, setCityValue] = useState("");

  return (
    <Box w="100%" pb="10px">
      <FormLabel htmlFor="visitedCities">Choose visited cities:</FormLabel>
      <InputGroup>
        <Input
          type="text"
          value={cityValue}
          onChange={(event) => setCityValue(event.target.value)}
          placeholder="Type place"
          id="visitedCities"
        />
        <Button
          ml="10px"
          colorScheme="green"
          onClick={() => {
            if (!cityValue) return;
            setFieldValue("visitedCities", [
              ...formikValues.visitedCities,
              cityValue.toUpperCase(),
            ]);
            setCityValue("");
          }}
        >
          add
        </Button>
      </InputGroup>
    </Box>
  );
};
