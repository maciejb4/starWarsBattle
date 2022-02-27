import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BattleCard } from "./BattleCard";

const customProps = {
  player: {
    name: "Mace Windu",
    height: "188",
    mass: "84",
    hair_color: "none",
    skin_color: "dark",
    eye_color: "brown",
    birth_year: "72BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/42/",
    films: [
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/",
    ],
    species: [],
    vehicles: [],
    starships: [],
    created: "2014-12-20T10:12:30.846000Z",
    edited: "2014-12-20T21:17:50.420000Z",
    url: "https://swapi.dev/api/people/51/",
  },
  score: 30,
  align: "left" as "left",
  attribute: "mass",
  description: "gender",
};

test("renders name correctly", () => {
  render(
    <BattleCard
      player={customProps.player}
      score={customProps.score}
      align={customProps.align}
      attribute={customProps.attribute}
      description={customProps.description}
    />
  );
  const name = screen.getByText("Mace Windu");
  expect(name).toBeInTheDocument();
});

test("renders attribute correctly", () => {
  render(
    <BattleCard
      player={customProps.player}
      score={customProps.score}
      align={customProps.align}
      attribute={customProps.attribute}
      description={customProps.description}
    />
  );
  const attribute = screen.getByText("mass", { exact: false });
  expect(attribute).toBeInTheDocument();
});

test("renders gender correctly", () => {
  render(
    <BattleCard
      player={customProps.player}
      score={customProps.score}
      align={customProps.align}
      attribute={customProps.attribute}
      description={customProps.description}
    />
  );
  const gender = screen.getByText("male");
  expect(gender).toBeInTheDocument();
});

test("renders winner correctly", () => {
  render(
    <BattleCard
      player={customProps.player}
      score={customProps.score}
      align={customProps.align}
      attribute={customProps.attribute}
      description={customProps.description}
    />
  );
  const winner = screen.getByText("Winner!");
  expect(winner).toBeInTheDocument();
});
