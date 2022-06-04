import { Box, Button, FormLabel, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { FormikValuesInterface } from "../views/SurveyView";

interface InputCitiesInterestProps {
  setFieldValue: (field: string, value: any, shouldValidate?: any) => void;
  formikValues: FormikValuesInterface;
}

export const InputCitiesInterest = ({
  formikValues,
  setFieldValue,
}: InputCitiesInterestProps) => {
  const [cityValue, setCityValue] = useState("");
  return (
    <Box w="100%" pb="10px">
      <FormLabel htmlFor="citiesInterest">
        Choose cities you would like to visit:
      </FormLabel>
      <InputGroup>
        <Input
          type="text"
          value={cityValue}
          onChange={(event) => setCityValue(event.target.value)}
          placeholder="Type place"
          id="citiesInterest"
        />
        <Button
          ml="10px"
          colorScheme="green"
          onClick={() => {
            if (!cityValue) return;
            setFieldValue("citiesInterest", [
              ...formikValues.citiesInterest,
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
