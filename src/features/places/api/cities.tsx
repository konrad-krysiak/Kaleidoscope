import { URL } from "@/constants/server";
import { useEffect, useState } from "react";
import { City } from "../types/City";

export const useCities = () => {
  const [cities, setCities] = useState<City[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(URL + "/city", {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((res) => res as City[]);
        setCities(response);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    data: cities,
    isLoading: loading,
    isError: error,
  };
};
