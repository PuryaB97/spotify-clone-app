import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="https://i.pinimg.com/originals/ed/54/57/ed54571b47cb3246d3d827d0e8a8f860.jpg" alt=""></img>
        <div className="footer__songInfo">
          <h4>Starboy</h4>
          <p>The Weeknd</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green"></ShuffleIcon>
        <SkipPreviousIcon className="footer__icon"></SkipPreviousIcon>
        <PlayCircleOutlineIcon
          fontSize="large"
          className="footer__icon"
        ></PlayCircleOutlineIcon>
        <SkipNextIcon className="footer__icon"></SkipNextIcon>
        <RepeatIcon className="footer__green"></RepeatIcon>
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon></PlaylistPlayIcon>
          </Grid>
          <Grid item>
            <VolumeDownIcon></VolumeDownIcon>
          </Grid>
          <Grid item xs>
            <Slider></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
