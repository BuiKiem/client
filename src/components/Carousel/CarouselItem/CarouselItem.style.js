import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  imageSlide: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90%",
    width: "100%",
    transition: "background-image .3s ease-in-out",
    backgroundImage: props => `url(${props.url})`
  }
}));
