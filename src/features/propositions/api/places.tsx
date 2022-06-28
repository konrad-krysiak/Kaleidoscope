import { URL } from "@/constants/server";
import { useEffect, useState } from "react";
import { PlaceTile } from "../types/PlaceTile";

export const usePlaces = () => {
  const [places, setPlaces] = useState<PlaceTile[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(URL + "/tenBest", {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((res) => res as PlaceTile[]);
        setPlaces(response);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    data: places,
    isLoading: loading,
    isError: error,
  };
};
