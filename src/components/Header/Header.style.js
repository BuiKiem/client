import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    margin: theme.spacing(0, 2)
  },
  title: {
    display: "block"
  },
  sectionDesktop: {
    display: "flex"
  },
  sectionMobile: {
    display: "none"
  }
}));

export default useStyles;
