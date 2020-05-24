import { hexToRgb, blackColor } from "assets/jss/material-dashboard-react.js";

const cardAvatarStyle = {
  cardAvatar: {
    "&$cardAvatarProfile img": {
      width: "100%",
      height: "auto"
    }
  },
  cardAvatarProfile: {
    maxWidth: "90px",
    maxHeight: "90px",
    margin: "-40px auto 0",
    borderRadius: "50%",
    overflow: "hidden",
    position: "relative",
    padding: "0",
    boxShadow:
      "0 16px 10px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    "&$cardAvatarPlain": {
      marginTop: "0"
    }
  },
  cardAvatarPlain: {}
};

export default cardAvatarStyle;
