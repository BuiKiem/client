import React, { useState } from "react";
import { Paper, Grid } from "@material-ui/core";

import useStyles from "./SearchBox.style";

import { SearchHotelForm } from "./SearchHotelForm/SearchHotelForm";
import { SearchCategory } from "./SearchCategory/SearchCategory";

const SEARCH_CATEGORIES = {
  hotel: "hotel",
  flight: "flight"
};

export function SearchBox() {
  const classes = useStyles();
  const [currentSearch, setCurrentSearch] = useState(SEARCH_CATEGORIES.hotel);

  function handleSearchFlight() {
    setCurrentSearch(SEARCH_CATEGORIES.flight);
  }

  function handleSearchHotel() {
    setCurrentSearch(SEARCH_CATEGORIES.hotel);
  }

  const actions = { handleSearchFlight, handleSearchHotel };

  return (
    <Paper className={classes.searchBox}>
      <Grid container className={classes.root} style={{ height: "250px" }}>
        <Grid item xs={3} style={{ borderRight: "1px solid black" }}>
          <SearchCategory {...actions} />
        </Grid>
        <Grid item xs={9}>
          <SearchHotelForm />
        </Grid>
      </Grid>
    </Paper>
  );
}
