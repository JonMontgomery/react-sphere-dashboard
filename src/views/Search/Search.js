import React, { Component } from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import Box from '@material-ui/core/Box';
import CardHeader from "components/Card/CardHeader.js";
import CircularProgress from '@material-ui/core/CircularProgress';

import InfluencerCard from "./InfluencerCard";
import FilterColumn from "./FilterColumn";
import searchURLBuilder from "../../helpers/searchURLBuilder.js";
import InfiniteScroll from 'react-infinite-scroller';

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
  const [language, setLanguage] = React.useState("en");
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  let prevOffset = offset;
  let hasMore = true;
  const classes = useStyles();

  React.useEffect(() => {
    if(offset > 20){
      hasMore = false;
    }
    console.log(hasMore);
    //check if local saved state
    function getUsers() {
      if(prevOffset === offset) {
        setOffset(0);
        setUsers([]);
      }
      prevOffset = offset;
      const url = searchURLBuilder(tags, location, engagement, followerRange, emailBool, language, offset);
      fetchUsers(url, users, setUsers, setLoading, classes, []);
      
      //save locally
    }

    // setLoading(true);
    getUsers();
  }, [tags, location, engagement, followerRange, emailBool, language]);

  function HandleEmailClick(){
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
          <div style={{height: window.innerHeight, overflow:"auto"}}>
            <InfiniteScroll
              loadMore={() => {
                setOffset(offset + 10);
                console.log(offset);
                const url = searchURLBuilder(tags, location, engagement, followerRange, emailBool, language, offset);
                fetchUsers(url, users, setUsers, setLoading, classes);
                setTimeout(10000);
              }}
              loader={<LoadingCircle classes={classes} />}
              initialLoad={false}
              hasMore={true}
              useWindow={false}
              threshold={10}
            >
              <div>
                {users}
              </div>
            </InfiniteScroll>
          </div>
          <GridItem>
            {loading ? <LoadingCircle classes={classes}/> : ""}
          </GridItem>
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

function LoadingCircle(props){
  return (
    <div className={props.classes.loading}>
      <CircularProgress color="secondary" />
    </div>
  );
}

function arrangeInfluencers(users, classes){
  const formattedUsers = [];
  // watch for this - 1
  for(let i = 0; i < users.length - 1; i++){
    let key = users[i].userID;
    formattedUsers.push(
      <Box display="flex" key={key} className={classes.influencerRow}>
        {arrangeInfluencer(users[i])}
        {arrangeInfluencer(users[++i])}
      </Box>
    );
  }
  return formattedUsers;
}

function arrangeInfluencer(user){
  return <InfluencerCard key={user.userID} user={user} /*monaUserID=*//>;
}

async function fetchUsers(url, users, setUsers, setLoading, classes){
  fetch(url)
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      const receivedUsers = data;
      setUsers([...users, ...arrangeInfluencers(receivedUsers, classes)]);
    })
    .catch(e => {
      console.log(e);
    });
}