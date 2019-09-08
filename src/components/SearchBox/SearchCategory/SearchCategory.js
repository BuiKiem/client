import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  LocalHotel as HotelIcon,
  Flight as FlightIcon
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export function SearchCategory({ handleSearchFlight, handleSearchHotel }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button onClick={handleSearchHotel}>
          <ListItemIcon>
            <HotelIcon />
          </ListItemIcon>
          <ListItemText primary="Hotel" />
        </ListItem>
        <ListItem button onClick={handleSearchFlight}>
          <ListItemIcon>
            <FlightIcon />
          </ListItemIcon>
          <ListItemText primary="Plane" />
        </ListItem>
      </List>
    </div>
  );
}
