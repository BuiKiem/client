import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { HomePage } from "./pages/HomePage";

import { FloatingActionButtonZoom } from "./components/FloatingContactButton/FloatingContactButton";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>

      <FloatingActionButtonZoom />
      <Footer />
    </>
  );
}

export default App;
