import { starshipsIds } from "./GameContainerData";

export const calculateWinner = (firstAttribute: any, secondAttribute: any) => {
  firstAttribute = firstAttribute === "unknown" ? 0 : parseInt(firstAttribute);
  secondAttribute =
    secondAttribute === "unknown" ? 0 : parseInt(secondAttribute);
  if (firstAttribute > secondAttribute) return 1;
  if (firstAttribute < secondAttribute) return 2;
  return null;
};

export const generateRandomPerson = () => {
  let number = Math.floor(Math.random() * 82 + 1);
  return number >= 17 ? ++number : number;
};

export const generateRandomStarship = () => {
  return starshipsIds[Math.floor(Math.random() * starshipsIds.length)];
};
