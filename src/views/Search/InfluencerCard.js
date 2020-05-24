import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import { flexbox } from '@material-ui/system';
import GridContainer from "components/Grid/GridContainer.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Card from "components/Card/Card.js";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import Chip from '@material-ui/core/Chip';
import CheckIcon from '@material-ui/icons/Check';
import avatar from "assets/img/faces/eric.jpg";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/searchStyle.js";
const useStyles = makeStyles(styles);

export default function InfluencerCard(){
  const classes = useStyles();
  return(
    <Card className={classes.influencerCard}>
      <div style={{padding:"25px"}}>
        <GridContainer>
          <PeopleIcon/><span>&nbsp; 10k</span>
          <CardAvatar profile>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={avatar} alt="..." />
            </a>
          </CardAvatar>
          <span style={{marginRight:"-10px"}}>10.53%&nbsp;</span><HeartButton />
        </GridContainer>
        <GridContainer 
          justify="center" 
          direction="column" 
          alignItems="center"
        >
          <GridItem style={{marginTop:"10px"}}>
            Full name
          </GridItem>
          <GridItem>
            &nbsp;&nbsp;&nbsp;@username &nbsp;
            <span title="Instagram verified"><CheckIcon  style={{fontSize:"small", color:"#1da1f3"}}/></span> 
            <span title="Sphere partner"><CheckIcon style={{fontSize:"small", color:"#ff9999"}}/></span> 
          </GridItem>
          <GridItem>
            Calabasas, California
          </GridItem>
          <GridItem style={{width:"auto"}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p
          </GridItem>
          <GridItem style={{width:"auto"}}>
            <div style={{overflow:"scroll"}}>
              <Chip
                icon={<LocalMallIcon />}
                label="Fashion"
              />
              <Chip
                icon={<FitnessCenterIcon />}
                label="Fitness"
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </Card>
  );
}

function HeartButton(){
  return (
    <IconButton style={{margin:"-25px -10px 0px 0px"}} aria-label="add to shopping cart">
      <FavoriteBorder/>
    </IconButton>
    //on pressed show  <Favorite />
  );
}