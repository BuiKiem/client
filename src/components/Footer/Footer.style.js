import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing(2, 0)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    position: "relative",
    width: "100%",
    bottom: theme.spacing(0),
    left: theme.spacing(0)
  }
}));
