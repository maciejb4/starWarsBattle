import {
  Card,
  CardContent,
  createTheme,
  Grid,
  Grow,
  Typography,
  Zoom,
} from "@mui/material";
import { useEffect, useState } from "react";
import { BattleCardProps } from "../../interfaces/BattleCardInterface";

export const BattleCard = ({
  player,
  attribute,
  align,
  description,
  score,
}: BattleCardProps) => {
  const theme = createTheme();
  const name = player?.name;
  const descriptionValue = player?.[description as keyof typeof player];
  const attributeName = attribute?.[0].toUpperCase() + attribute.slice(1);
  const attributeValue = player?.[attribute as keyof typeof player];
  const [leftTransition, setLeftTransition] = useState<any>(false);
  const [rightTransition, setRightTransition] = useState<any>(false);

  useEffect(() => {
    if (score > 0) {
      if (align === "left") {
        setLeftTransition(true);
        setTimeout(() => {
          setLeftTransition(false);
        }, 500);
      } else {
        setRightTransition(true);
        setTimeout(() => {
          setRightTransition(false);
        }, 500);
      }
    }
  }, [score]);

  return (
    <Grid item md={5} xs={4} role="BattleCard">
      <Card sx={{ height: 180 }}>
        <CardContent>
          <Grid container>
            {align === "right" && (
              <Grid item md={4}>
                <Zoom in={rightTransition}>
                  <Typography
                    variant="h5"
                    sx={{ color: theme.palette.success.main }}
                  >
                    Winner!
                  </Typography>
                </Zoom>
              </Grid>
            )}
            <Grid item md={8}>
              <Typography
                variant="h5"
                component="div"
                align={align}
                role="name"
              >
                {name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align={align}>
                {descriptionValue}
              </Typography>
              <Typography
                sx={{ height: 80 }}
                variant="h5"
                component="div"
                align={align}
              >
                {attributeName} : {attributeValue}
              </Typography>
            </Grid>
            {align === "left" && (
              <Grid item md={4}>
                <Grow in={leftTransition}>
                  <Typography
                    align="right"
                    variant="h5"
                    sx={{ color: theme.palette.success.main }}
                  >
                    Winner!
                  </Typography>
                </Grow>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
