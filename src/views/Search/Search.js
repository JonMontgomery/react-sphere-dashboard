import React, { Component } from "react";

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
import { Grid } from "@material-ui/core";
import InfluencerCard from "./InfluencerCard";
import FilterColumn from "./FilterColumn";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/searchStyle.js";
const useStyles = makeStyles(styles);

export default function(){
  const [tags, setTags] = React.useState([]);
  const [location, setLocation] = React.useState(0);
  const [engagement, setEngagement] = React.useState(0.0);
  const [followerRange, setFollowerRange] = React.useState([10000,50000]);
  const [emailBool, setEmailBool] = React.useState(false);
  const [language, setLanguage] = React.useState();
    React.useEffect(() => {
      console.log({tags});
      console.log({location});
      console.log({emailBool});
      console.log({engagement});
      console.log({language});
      console.log({followerRange});
    });
  function HandleEmailClick(){
    setEmailBool(!emailBool);
  }
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
          <Box display="flex" className={classes.influencerRow}>
            <InfluencerCard />
            <InfluencerCard />
          </Box>
          <Box display="flex" className={classes.influencerRow}>
            <InfluencerCard />
            <InfluencerCard />
          </Box>
          <Box display="flex" className={classes.influencerRow}>
            <InfluencerCard />
            <InfluencerCard />
          </Box>
        </Card>
      </GridItem>
      <GridItem xs={3} sm={4} md={4}>
        <FilterColumn 
          tags={tags}
          tagHandler={setTags}
          location={location}
          locationHandler={setLocation}
          engagementHandler={setEngagement}
          followerRangeHandler={setFollowerRange}
          emailHandler={HandleEmailClick} 
          language={language}
          languageHandler={setLanguage}
        />
      </GridItem>
    </GridContainer>
  );
}
