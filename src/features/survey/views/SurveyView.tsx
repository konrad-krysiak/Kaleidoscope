import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import { CheckboxAttractions } from "../components/CheckboxAttractions";
import { InputCitiesInterest } from "../components/InputCitiesInterest";
import { TagsCitiesInterest } from "../components/TagsCitiesInterest";
import { ComboboxLocalLanguage } from "../components/ComboboxLocalLanguage";
import { RadioAnimals } from "../components/RadioAnimals";
import { RadioCityType } from "../components/RadioCityType";
import { RadioCompanionType } from "../components/RadioCompanionType";
import { RadioRestType } from "../components/RadioRestType";
import { RadioWheelhairRamp } from "../components/RadioWheelhairRamp";
import { RadioSeaMountains } from "../components/RadioSeaMountains";
import { InputVisitedCities } from "../components/InputVisitedCities";
import { TagsVisitedCities } from "../components/TagsVisitedCities";
import { RadioWeatherType } from "../components/RadioWeatherType";

export interface FormikValuesInterface {
  visitedCities: Array<string>;
  citiesInterest: Array<string>;
  localLanguage: string;
  SeaMountains: string;
  RestType: string;
  CompanionType: string;
  WheelhairRamp: string;
  Animals: string;
  Attractions: Array<string>;
  WeatherType: string;
  CityType: string;
}

export const SurveyView: NextPage = () => {
  return (
    <Box>
      <Box position="fixed" w="100%" minHeight="100%" zIndex="-1">
        <Image src="/road.jpg" w="100%" />
      </Box>

      <Flex justifyContent="center" alignItems="center" minHeight="100vh">
        <Flex
          flexDirection="column"
          alignItems="center"
          bgColor="#fff"
          w="600px"
          h="auto"
          boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
          borderRadius="2px"
          p="30px"
        >
          <Heading py="50px">FILL THE SURVEY!</Heading>

          <Formik
            enableReinitialize
            initialValues={{
              visitedCities: [],
              citiesInterest: [],
              localLanguage: "",
              SeaMountains: "",
              RestType: "",
              CompanionType: "",
              WheelhairRamp: "",
              Animals: "",
              Attractions: [],
              WeatherType: "",
              CityType: "",
            }}
            onSubmit={(event) => {
              console.log(event);
            }}
          >
            {({ values, handleChange, handleBlur, errors, setFieldValue }) => (
              <Form style={{ width: "100%" }}>
                <Flex direction="column" gap="60px">
                  <Box>
                    <InputVisitedCities
                      setFieldValue={setFieldValue}
                      formikValues={values}
                    />
                    <TagsVisitedCities
                      formikValues={values}
                      setFieldValue={setFieldValue}
                    />
                  </Box>

                  <Box>
                    <InputCitiesInterest
                      formikValues={values}
                      setFieldValue={setFieldValue}
                    />
                    <TagsCitiesInterest
                      formikValues={values}
                      setFieldValue={setFieldValue}
                    />
                  </Box>

                  <Box>
                    <ComboboxLocalLanguage setFieldValue={setFieldValue} />
                  </Box>

                  <Box>
                    <RadioSeaMountains />
                  </Box>

                  <Box>
                    <RadioRestType />
                  </Box>

                  <Box>
                    <RadioCompanionType />
                  </Box>

                  <Box>
                    <RadioWheelhairRamp />
                  </Box>

                  <Box>
                    <RadioAnimals />
                  </Box>

                  <Box>
                    <CheckboxAttractions />
                  </Box>

                  <Box>
                    <RadioWeatherType />
                  </Box>

                  <Box>
                    <RadioCityType />
                  </Box>

                  <Button colorScheme="green" type="submit" mt="50px">
                    SEND SURVEY AND REGISTER
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
    </Box>
  );
};
