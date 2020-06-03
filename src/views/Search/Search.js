import React, { Component } from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import Box from '@material-ui/core/Box';
import CardHeader from "components/Card/CardHeader.js";
import InfluencerCard from "./InfluencerCard";
import FilterColumn from "./FilterColumn";

import searchURLBuilder from "../../helpers/searchURLBuilder.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/searchStyle.js";
const useStyles = makeStyles(styles);

export default function(){
//   const [filters, setFilters] = React.useState({
//     filters: 
//       {
//         tags: [],
//         location: null,
//         minEngagement: 1.0,
//         followerRange: [10000, 50000],
//         emailBool: false,
//         language: null,
//       }
// })
  const [tags, setTags] = React.useState([]);
  const [location, setLocation] = React.useState();
  const [engagement, setEngagement] = React.useState(1.0);
  const [followerRange, setFollowerRange] = React.useState([10000,50000]);
  const [emailBool, setEmailBool] = React.useState(false);
  const [language, setLanguage] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    //check if local saved state
    async function getUsers() {
      const url = searchURLBuilder(tags, location, engagement, followerRange, emailBool, language);
      console.log(url);
      const receivedUsers = await fetchUsers(url, setLoading);
      setUsers(oldUsers => [...arrangeInfluencers(receivedUsers, classes)]);
    }
    getUsers();
  }, [tags, location, engagement, followerRange, emailBool, language]);

  

  function HandleEmailClick(){
    // setFilters({...filters, location: "12323234"})
    setEmailBool(!emailBool);
  }
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
          {users}
        </Card>
      </GridItem>
      <GridItem xs={3} sm={4} md={4}>
        <FilterColumn 
          tags={tags}
          tagHandler={setTags}
          location={location}
          locationHandler={setLocation}
          engagement={engagement}
          engagementHandler={setEngagement}
          followerRange={followerRange}
          followerRangeHandler={setFollowerRange}
          emailBool={emailBool}
          emailBoolHandler={HandleEmailClick} 
          language={language}
          languageHandler={setLanguage}
        />
      </GridItem>
    </GridContainer>
  );
}

function arrangeInfluencers(users, classes){
  const formattedUsers = [];
  // watch for this - 1
  for(let i = 0; i < users.length - 1; i++){
    formattedUsers.push(
      <Box display="flex" className={classes.influencerRow}>
        {arrangeInfluencer(users[i])}
        {arrangeInfluencer(users[++i])}
      </Box>
    );
  }
  return formattedUsers;
}

function arrangeInfluencer(user){
  return <InfluencerCard key={user.userID} user={user} />;
}

function fetchUsers(url, setLoading){
  return fetch(url)
    .then(response => {
      setLoading(false);
      return response.json();
    })
    .catch(e => {
      console.log(e);
    });
}