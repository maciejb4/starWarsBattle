import React from 'react';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import './App.css';
import { PageHeader } from './starWarsBattle/components/PageHeader/PageHeader';
import {GameContainer} from "./starWarsBattle/components/GameContainer/GameContainer";

const App = () => {
  const theme = createTheme();
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <PageHeader/>
            <GameContainer/>
          </main>
        </Container>
      </ThemeProvider>
  );
}


export default App;
