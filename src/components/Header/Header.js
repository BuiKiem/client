import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Button
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  LocalHotel as Hotel,
  Flight as FlightIcon,
  AttachMoney as PromotionIcon
} from "@material-ui/icons";

import useStyles from "./Header.style";

export function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  // TODO: Add Redux selector for current user
  const currentUser = true;

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleProfileMenuClose() {
    setAnchorEl(null);
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            TravelBuki
          </Typography>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Button color="inherit" className={classes.menuButton}>
              <PromotionIcon />
              <Typography variant="body1">Promotion</Typography>
            </Button>

            <Button color="inherit" className={classes.menuButton}>
              <Hotel />
              <Typography variant="body1">Hotel</Typography>
            </Button>
            <Button color="inherit" className={classes.menuButton}>
              <FlightIcon />
              <Typography variant="body1">Flight</Typography>
            </Button>

            {currentUser ? (
              <IconButton
                edge="end"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircleIcon />
                <Typography variant="body2">Username</Typography>
              </IconButton>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.menuButton}
                >
                  <Typography variant="body1">Sign In</Typography>
                </Button>
                <Button
                  variant="contained"
                  color="text.secondary"
                  className={classes.menuButton}
                >
                  <Typography variant="body1">Sign Up</Typography>
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
