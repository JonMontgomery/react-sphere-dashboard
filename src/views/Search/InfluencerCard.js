import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Card from "components/Card/Card.js";
import PeopleIcon from '@material-ui/icons/People';
import Chip from '@material-ui/core/Chip';
import CheckIcon from '@material-ui/icons/Check';
import avatar from "assets/img/faces/eric.jpg";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

import numberFormatter from "../../helpers/numberFormatter.js";
import numberWithCommas from "../../helpers/numberWithCommas.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/searchStyle.js";
import App from "views/UserProfile/UserProfile.js"
const useStyles = makeStyles(styles);

export default function InfluencerCard(props){
  const classes = useStyles();
  return(
    <Card className={classes.influencerCard}>
      <div className={classes.metaDisplay}>
        <GridContainer
          className={classes.metaDisplay}
        >
          <PeopleIcon/><span title={numberWithCommas(props.user.followers)}>&nbsp; {numberFormatter(props.user.followers)}</span>
          <CardAvatar profile>
            <a href="" onClick={e => e.preventDefault()}>
              <img src={avatar} alt="..." />
            </a>
          </CardAvatar>
          //<button onClick={() => App.getProfile(props.user)}View Profile/>
          <span 
            title={numberFormatter(props.user.engagementMetric.engagement) + " likes/comments avg"} 
            style={{marginRight:"-10px"}}
          >
            {props.user.engagementMetric.averageEngagementLikesComments}%&nbsp;
          </span>
          <HeartButton userID={props.user.userID}/>
        </GridContainer>
        <GridContainer 
          justify="flex-end" 
          direction="column" 
          alignItems="center"
        >
          <GridItem style={{marginTop:"10px", height:"24px", fontWeight: "bold"}}>
          {props.user.fullName}
          </GridItem>
          <GridItem style={{width:"auto", height:"24px"}}>
            &nbsp;&nbsp;&nbsp;@{props.user.username} &nbsp;
            {props.user.about.verified ? <span title="Instagram verified"><CheckIcon  style={{fontSize:"small", color:"#1da1f3"}}/></span> : ''} 
            {/* <span title="Sphere partner"><CheckIcon style={{fontSize:"small", color:"#ff9999"}}/></span>  */}
          </GridItem>
          <GridItem>
          📍{props.user.state}
          </GridItem>
          <GridItem style={{height:"auto", minHeight: "96px"}}>
            {props.user.about.bio}
          </GridItem>
          <GridItem style={{width:"auto"}}>
            <div className={classes.tagsDisplay}>
              <Chip
                icon={<LocalMallIcon />}
                label="Fashion"
              />
              <Chip
                icon={<FitnessCenterIcon />}
                label="Fitness"
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

function HeartButton(props){
  const [like, setLike] = React.useState(false);
    React.useEffect(() => {
      if (like){
        console.log(props.userID)
      }
    });
  return (
    <IconButton 
      style={{margin:"-25px -10px 0px 0px"}} 
      aria-label="favorite this influencer"
      onClick={() => setLike(!like)}
    >
      {like ? <Favorite color="secondary"/> : <FavoriteBorder/>}
    </IconButton>
    //on pressed show  
  );
}

