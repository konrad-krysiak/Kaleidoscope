import { Box, Flex, Text } from "@chakra-ui/react";
import { FormikValuesInterface } from "../views/SurveyView";
import { CityTag } from "./CityTag";

interface TagsVisitedCitiesProps {
  formikValues: FormikValuesInterface;
  setFieldValue: (field: string, value: any, shouldValidate?: any) => void;
}

export const TagsVisitedCities = ({
  formikValues,
  setFieldValue,
}: TagsVisitedCitiesProps) => {
  const removeCity = (idx: number) => {
    setFieldValue(
      "visitedCities",
      formikValues.visitedCities.filter((_, index) => index !== idx)
    );
  };

  const cities = formikValues.visitedCities.map((item, idx) => (
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
      {cities}
    </Flex>
  );
};
