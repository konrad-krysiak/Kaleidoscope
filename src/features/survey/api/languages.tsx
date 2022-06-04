import useSWR from "swr";
import languagesJson from "../data/languages.json";
import { Language } from "../types/Language";

const LANGUAGES_KEY = "LANGUAGES_KEY" as const;

const languageFetcher = () => {
  return new Promise<Array<Language>>((resolve, reject) => {
    const data: Array<Language> = JSON.parse(JSON.stringify(languagesJson));
    if (!data) {
      reject("Language data couldn't be loaded...");
    }
    resolve(data);
  });
};

export const useLanguages = () => {
  const { data, error } = useSWR<Language[], Error, typeof LANGUAGES_KEY>(
    LANGUAGES_KEY,
    languageFetcher
  );

  return {
    data,
    isLoading: !data && !error,
    isError: Boolean(error),
    error,
  };
};

// SWR IS CALLING FETCHER DURING INTERACTION WITH PAGE.. ITS UNNECCESSARY
