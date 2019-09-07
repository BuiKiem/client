import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  slideArrow: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    opacity: "0.7"
  },
  left: {
    left: theme.spacing(1)
  },
  right: {
    right: theme.spacing(1)
  }
}));
