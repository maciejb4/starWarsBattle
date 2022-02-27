import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { BattleCard } from "../BattleCard/BattleCard";
import {
  calculateWinner,
  generateRandomPerson,
  generateRandomStarship,
} from "./GameContainerUtils";

export const GameContainer = () => {
  const [firstData, setFirstData] = useState<any>();
  const [secondData, setSecondData] = useState<any>();
  const [resource, setResource] = useState<any>("people");
  const [attribute, setAttribute] = useState<any>("mass");
  const [description, setDescription] = useState<any>("gender");
  const [gameCount, setGameCount] = useState<any>(0);
  const [leftScore, setLeftScore] = useState<any>(0);
  const [rightScore, setRightScore] = useState<any>(0);

  useEffect(() => {
    const firstRandomNumber =
      resource === "people" ? generateRandomPerson() : generateRandomStarship();
    fetch(`https://swapi.dev/api/${resource}/${firstRandomNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setFirstData(data);
        const secondRandomNumber =
          resource === "people"
            ? generateRandomPerson()
            : generateRandomStarship();
        fetch(`https://swapi.dev/api/${resource}/${secondRandomNumber}`)
          .then((res) => res.json())
          .then((data) => {
            setSecondData(data);
          });
      });
  }, [resource, gameCount]);

  useEffect(() => {
    if (firstData?.[attribute] && secondData?.[attribute]) {
      const calculatedWinner = calculateWinner(
        firstData[attribute],
        secondData[attribute]
      );
      if (calculatedWinner !== null) {
        calculatedWinner === 1
          ? setLeftScore((value: any) => value + 1)
          : setRightScore((value: any) => value + 1);
      }
    }
  }, [secondData]);

  const handleSelection = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue) {
      setResource(newValue);
      setAttribute(newValue === "people" ? "mass" : "crew");
      setDescription(newValue === "people" ? "gender" : "model");
    }
  };

  const handlePlayButton = () => {
    setGameCount((value: any) => value + 1);
  };

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="space-between" sx={{ pb: 5 }}>
        <Grid item md={1}>
          <Typography variant="h3" component="div" role="score">
            {leftScore}
          </Typography>
        </Grid>
        <Grid item>
          <ToggleButtonGroup
            value={resource}
            exclusive
            onChange={handleSelection}
          >
            <ToggleButton value="people">People</ToggleButton>
            <ToggleButton value="starships">Starships</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item md={1}>
          <Typography align="right" variant="h3" component="div" role="score">
            {rightScore}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        <BattleCard
          player={firstData}
          align="left"
          score={leftScore}
          {...{ attribute, description }}
        />
        <Grid item>
          <Typography variant="h2" component="div">
            VS
          </Typography>
        </Grid>
        <BattleCard
          player={secondData}
          align="right"
          score={rightScore}
          {...{ attribute, description }}
        />
      </Grid>
      <Grid container justifyContent="center">
        <Button variant="contained" onClick={handlePlayButton}>
          Play!
        </Button>
      </Grid>
    </Container>
  );
};
