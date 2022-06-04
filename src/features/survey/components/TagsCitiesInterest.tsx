import { Box, Flex } from "@chakra-ui/react";
import { FormikValuesInterface } from "../views/SurveyView";
import { CityTag } from "./CityTag";

interface TagsCitiesInterestProps {
  formikValues: FormikValuesInterface;
  setFieldValue: (field: string, value: any, shouldValidate?: any) => void;
}

export const TagsCitiesInterest = ({
  formikValues,
  setFieldValue,
}: TagsCitiesInterestProps) => {
  const removeCity = (idx: number) => {
    setFieldValue(
      "citiesInterest",
      formikValues.citiesInterest.filter((_, index) => index !== idx)
    );
  };

  const citiesInterest = formikValues.citiesInterest.map((item, idx) => (
    <Box
      display="inline-block"
      onClick={() => removeCity(idx)}
      cursor="pointer"
      key={idx}
    >
      <CityTag title={item} />
    </Box>
  ));

  return (
    <Flex gap="5px" wrap="wrap">
      {citiesInterest}
    </Flex>
  );
};
