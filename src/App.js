import React from "react";
import { CssBaseline } from "@material-ui/core";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FloatingActionButtonZoom } from "./components/FloatingContactButton/FloatingContactButton";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <FloatingActionButtonZoom />
      <Footer />
    </>
  );
}

export default App;
