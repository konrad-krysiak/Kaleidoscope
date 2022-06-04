import { Box } from "@chakra-ui/react";
import { PlaceTile } from "../types/PlaceTile";
import { Tile } from "./Tile";

const mock: PlaceTile[] = [
  {
    city: "Warsaw",
    country: "Poland",
    description:
      "Id sit veniam aliqua labore ea cupidatat. Occaecat proident magna laborum dolore do. Lorem aliqua consequat tempor incididunt. Enim ipsum velit adipisicing adipisicing labore.",
    rating: 4,
    places: ["church", "castle"],
  },
  {
    city: "Paris",
    country: "France",
    description:
      "Veniam elit magna in cillum nostrud et in. Eiusmod adipisicing est non est ut proident excepteur commodo ullamco magna consequat cillum. Cillum ipsum adipisicing enim excepteur.",
    rating: 5,
    places: ["something", "place v2"],
  },
];

export const PlaceTiles = () => {
  return (
    <Box>
      {mock.map((place) => (
        <Tile {...place} />
      ))}
    </Box>
  );
};
