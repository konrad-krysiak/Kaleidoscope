import { Box, Text } from "@chakra-ui/react";
import { Combobox } from "react-widgets/cjs";
import { useLanguages } from "../api/languages";

interface ComboboxLocalLanguageProps {
  setFieldValue: (field: string, value: any, shouldValidate?: any) => void;
}

export const ComboboxLocalLanguage = ({
  setFieldValue,
}: ComboboxLocalLanguageProps) => {
  const { data, isLoading } = useLanguages();

  const languageNames = data?.map((item) => item.name);

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box>
      <Text>Choose local language:</Text>
      <Combobox
        data={languageNames}
        placeholder="Choose language"
        onChange={(val) => {
          setFieldValue("localLanguage", val);
        }}
      />
    </Box>
  );
};
