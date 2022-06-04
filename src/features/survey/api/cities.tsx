import { City } from "country-state-city";
import { ICity } from "country-state-city/dist/lib/interface";
import useSWR from "swr";

const CITIES_KEY = "CITIES_KEY" as const;

const fetchAllCities = () => {
  return new Promise<ICity[]>((resolve, reject) => {
    const cities = City.getAllCities();
    if (cities) {
      resolve(cities);
    } else {
      reject("Error while fetching cities.");
    }
  });
};

export const useCities = () => {
  const { data, error } = useSWR<ICity[], Error, typeof CITIES_KEY>(
    CITIES_KEY,
    fetchAllCities
  );
  return {
    data,
    isLoading: !data && !error,
    isError: Boolean(error),
    error,
  };
};

// UNUSED
