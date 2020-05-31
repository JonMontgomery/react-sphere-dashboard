import React, { Component } from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import Box from '@material-ui/core/Box';
import CardHeader from "components/Card/CardHeader.js";
import InfluencerCard from "./InfluencerCard";
import FilterColumn from "./FilterColumn";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/searchStyle.js";
const useStyles = makeStyles(styles);

export default function(){
//   const [filters, setFilters] = React.useState({
//     filters: 
//       [{
//         tags: [],
//         location: null,
//         minEngagement: 1.0,
//         followerRange: [10000, 50000],
//         emailBool: false,
//         language: null,
//       }],
//     stepNumber: 0,  
// })
  const [tags, setTags] = React.useState([]);
  const [location, setLocation] = React.useState();
  const [engagement, setEngagement] = React.useState(1.0);
  const [followerRange, setFollowerRange] = React.useState([10000,50000]);
  const [emailBool, setEmailBool] = React.useState(false);
  const [language, setLanguage] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);
    React.useEffect(async () => {
      //check if local saved state
      const receivedUsers = await fetchUsers(setLoading);
      console.log({...receivedUsers});
      setUsers([...users, ...arrangeInfluencers(receivedUsers)]);

      console.log({tags, location, emailBool, engagement, language, followerRange});
    });
  function HandleEmailClick(){
    setEmailBool(!emailBool);
  }
  const classes = useStyles();

  console.log({users});
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

function arrangeInfluencers(users){
  const formattedUsers = [];
  for(let i = 0; i < users.length; i++){
    formattedUsers.push(
      <Box>
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

function fetchUsers(setLoading){
  return fetch('http://localhost:3001/influencersearch/')
    .then(response => {
      setLoading(false);
      return response.json();
    })
    .catch(e => {
      console.log(e);
    });
}