
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import React, { Component } from 'react'

import UserProfile from 'react-user-profile'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {  getProfile : false }
    this.getProfile = this.getProfile.bind(this);
  }

 getProfile = () => {
     this.setState({  getProfile : true });
     console.log('hit');
 }

  render() {
    const photo = 'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599'
    const userName = "Jon"
    const location = "Bay Area"
    
    const comments = [
      {
        id: '1',
        photo: 'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599',
        userName: 'Jon',
        content: 'Comments ...',
        createdAt: 1543858000000
      }
    ]

    return (
      <div style={{ margin: '0 auto', width: '100%' }}>
        <UserProfile photo={photo} userName={userName} location={location} initialLikesCount={121} initialFollowingCount={723} initialFollowersCount={4433} initialComments={comments} />
      </div>
    )}

  }

export default App;
