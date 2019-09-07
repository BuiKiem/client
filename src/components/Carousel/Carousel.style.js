import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  carousel: {
    position: "relative",
    width: "100%",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  carouselButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
    opacity: "0.7",
    position: "absolute",
    bottom: theme.spacing(4),
    right: theme.spacing(3)
  }
}));
