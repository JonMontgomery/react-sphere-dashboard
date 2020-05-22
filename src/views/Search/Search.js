import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import { flexbox } from '@material-ui/system';
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import Box from '@material-ui/core/Box';
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import Icon from "@material-ui/core/Icon";
import SearchIcon from '@material-ui/icons/Search';
import CardAvatar from "components/Card/CardAvatar.js";
import PeopleIcon from '@material-ui/icons/People';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CheckIcon from '@material-ui/icons/Check';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import styles from "assets/jss/material-dashboard-react/views/searchStyle.js";
import avatar from "assets/img/faces/marc.jpg";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles(styles);

export default function(){
  const classes = useStyles();
  return(
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Influencer Search</h4>
          <p className={classes.cardCategoryWhite}>
            Pick and choose your influencers
          </p>
        </CardHeader>
      </GridItem>
      <GridItem xs={11} sm={8} md={8}>
        <Card plain>
          <Box display="flex">
            <InfluencerCard />
            <InfluencerCard />
          </Box>
          <Box display="flex">
            <InfluencerCard />
            <InfluencerCard />
          </Box>
          <Box display="flex">
            <InfluencerCard />
            <InfluencerCard />
          </Box>
        </Card>
      </GridItem>
      <GridItem xs={3} sm={4} md={4}>
        <FilterColumn/>
      </GridItem>
    </GridContainer>
  );
}

function InfluencerCard(){
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
          <span>10.53%&nbsp;</span><FavoriteBorderIcon />
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
          Fashion, Beauty, Lifestyle ...
          </GridItem>
        </GridContainer>
      </div>
    </Card>
  );
}

function FilterColumn(){
  const classes = useStyles();
  return(
    <Card className={classes.filterCol}>
      <CardHeader>
        <h4 className={classes.cardTitleBlack}>Add Filters</h4>
        <p className={classes.cardCategoryBlack}>
          Here is a subtitle for this table
        </p>
      </CardHeader>
      
      <TagFilter />
      <LocationFilter />
      <EngagementFilter />
      <FollowerFilter />
      <EthnicityFilter />
      <HashtagFilter />
      <EmailFilter />
      <LanguageFilter />
      
    </Card>
  );
}

function TagFilter(){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <CardHeader>
        <h6 className={classes.cardTitleBlack}>Tags</h6>
      </CardHeader>
    </Card>
  );
}

function LocationFilter(){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <CardHeader>
        <h6 className={classes.cardTitleBlack}>Location</h6>
      </CardHeader>
    </Card>
  );
}

function EngagementFilter(){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <CardHeader>
        <h6 className={classes.cardTitleBlack}>Engagement</h6>
      </CardHeader>
    </Card>
  );
}

function FollowerFilter(){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <CardHeader>
        <h6 className={classes.cardTitleBlack}>Follower</h6>
      </CardHeader>
    </Card>
  );
}

function EthnicityFilter(){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <CardHeader>
        <h6 className={classes.cardTitleBlack}>Ethnicity</h6>
      </CardHeader>
    </Card>
  );
}

function HashtagFilter(){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <CardHeader>
        <h6 className={classes.cardTitleBlack}>Hashtag</h6>
      </CardHeader>
    </Card>
  );
}

function EmailFilter(){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <CardHeader>
        <h6 className={classes.cardTitleBlack}>Email</h6>
      </CardHeader>
    </Card>
  );
}

function LanguageFilter(){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <CardHeader>
        <h6 className={classes.cardTitleBlack}>Language</h6>
      </CardHeader>
    </Card>
  );
}