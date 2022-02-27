import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GameContainer } from "./GameContainer";

test("renders people with mass at the start of application", () => {
  render(<GameContainer />);

  const allMasses = screen.getAllByText("mass", { exact: false });

  expect(allMasses[0]).toBeInTheDocument();
  expect(allMasses[1]).toBeInTheDocument();
});

test("changes display type to starships with crew after using button", () => {
  render(<GameContainer />);

  fireEvent.click(screen.getByText("Starships"));

  const allCrews = screen.getAllByText("crew", { exact: false });

  expect(allCrews[0]).toBeInTheDocument();
  expect(allCrews[1]).toBeInTheDocument();
});

test("changes display type to people with mass after using button", () => {
  render(<GameContainer />);

  fireEvent.click(screen.getByText("Starships"));
  fireEvent.click(screen.getByText("People"));

  const allMasses = screen.getAllByText("mass", { exact: false });

  expect(allMasses[0]).toBeInTheDocument();
  expect(allMasses[1]).toBeInTheDocument();
});
