import { Board } from "@/components/Board";
import { Footer } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar";
import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { LandingSection } from "../components/LandingSection";

export const LandingpageView = () => {
  return (
    <Box>
      <Board />
      <Navbar />
      <Flex direction="column" alignItems="center" py="50px">
        <Image src="/black_star.jpeg" width="50px" height="50px" />
        <Text
          fontFamily="Roboto Mono"
          fontSize="15px"
          color="#5c5c5c"
          pt="40px"
        >
          BY KONRAD KRYSIAK
        </Text>
        <Text
          fontSize={["25px", "25px", "30px", "35px", "40px"]}
          fontFamily="Georama"
        >
          KALEIDOSCOPE PROJECT MOTIVATION
        </Text>
        <Box py="100px">
          <Image src="/globus.jpg" width="300px" height="300px" />
        </Box>
      </Flex>
      <LandingSection title="TRAVELING KALEIDOSCOPE">
        Our application is meant to propose places and locations user would like
        to visid based on collected information and other people's experiences.
      </LandingSection>

      <LandingSection title="USER'S PERSPECTIVE">
        To use our application you must create an account and complete a short
        To use our application you must create an account and complete a short
        questionnaire that will help the application recommend a place that
        questionnaire that will help the application recommend a place that best
        meets to user's expectations. After registration, the user can ask for a
        recommendation of the place that best suits him. He can also
        independently search for places in the system and check opinions and
        reviews previously added by other people or describe his own experiences
        to make it easier for others to decide. In addition to places, you can
        also search for other users and view their profiles.
      </LandingSection>

      <LandingSection title="QUESTIONNAIRE">
        <Box>
          <Text>
            The application requires setting up an account and filling out a
            short questionnaire to determine your preferences. Survey looks like
            this:
          </Text>
          <UnorderedList px="20px">
            <ListItem>Hobby</ListItem>
            <ListItem>Favourite place</ListItem>
            <ListItem>Visited places</ListItem>
            <ListItem>Favourite food</ListItem>
            <ListItem>Prefered weather</ListItem>
            <ListItem>Do you travel with pet?</ListItem>
            <ListItem>Do you travel with children?</ListItem>
            <ListItem>Should place be adapted to a disabled person?</ListItem>
          </UnorderedList>
          <Text>
            Obtaining the above information will allow the application to
            compare the given data with the data of other users and their
            ratings, and to select the most appropriate place to visit.
          </Text>
        </Box>
      </LandingSection>

      <LandingSection title="FEEDBACK">
        Each place visited by the user can be rated on a scale of 1 - 5 stars.
        This will allow us to better match places in the future. The user can
        also write a review of the place visited and help others find a trip.
      </LandingSection>

      <LandingSection title="SEARCH ENGINE">
        To find information about a place of interest, the user can use the
        search engine to access ratings and reviews of people who have already
        visited it.
      </LandingSection>

      <LandingSection title="RECOMMENDATION">
        The application takes into account the information provided in the
        survey and the opinions of users with similar preferences in order, at
        the user's request, to recommend a place to visit.
      </LandingSection>

      <LandingSection title="HISTORY">
        Changes made by users are saved in history. Thanks to this, they can be
        easily withdrawn.
      </LandingSection>
      <Footer />
    </Box>
  );
};
