import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import Chip from '@material-ui/core/Chip';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/searchStyle.js";
const useStyles = makeStyles(styles);

export default function FilterColumn(props){
  const classes = useStyles();
  return(
    <Card className={classes.filterCol}>
      <CardHeader>
        <h3 
          className={classes.cardTitleBlack} 
          style={{margin:"0px 0px -15px 0px"}}
        >
          Add Filters
        </h3>
      </CardHeader>
      <div style={{margin:"0px 10px"}}>
        <TagFilter />
        <LocationFilter />
        <EngagementFilter engagementHandler={props.engagementHandler} />
        <FollowerFilter />
        {/* <EthnicityFilter /> */}
        {/* <HashtagFilter /> */}
        <EmailFilter emailHandler={props.emailHandler} />
        <LanguageFilter />
      </div>
    </Card>
  );
}

function TagFilter(){
  const classes = useStyles();

  const handleChangeMultiple = (event) => {
    console.log(event.target);
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    TagChips(value);
  };

  return(
    <Card className={classes.individualFilter}>
      {/* <CardHeader>
        <h6 className={classes.cardTitleBlack}>Tags</h6>
      </CardHeader> */}
      <FormControl className={classes.formControl}>
        <InputLabel id="tags">Tags</InputLabel>
        <Select
          labelId="tags" 
          id="tags-select"
          onChange={handleChangeMultiple}
        >
          <MenuItem value={"Fashion"}>Fashion</MenuItem>
          <MenuItem value={"Fitness"}>Fitness</MenuItem>
          <MenuItem value={"Artist"}>Artist</MenuItem>
        </Select>
      </FormControl>
      <GridContainer 
        justify="center" 
        alignItems="center"
      >
        <TagChips />
        <TagChips />
        <TagChips />
      </GridContainer>
    </Card>
  );
}

function TagChips(props){
  //iterate through each chip and place it
  return(
    <GridItem>
      <Chip
        icon={<LocalMallIcon />}
        label="Fashion"
        style={{margin:"2px"}}
      />
    </GridItem>
  );
}

function LocationFilter(){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <FormControl className={classes.formControl}>
        <InputLabel id="location">Location</InputLabel>
        <Select
          labelId="location" 
          id="location-select"
          value={"United States"}
        >
          <MenuItem value={"United States"}>United States</MenuItem>
          <MenuItem value={"California"}>California</MenuItem>
          <MenuItem value={"Nevada"}>Nevada</MenuItem>
        </Select>
      </FormControl>
    </Card>
  );
}

// slider
function EngagementFilter(props){
  const classes = useStyles();
  const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 2.5,
    label: '2.5%',
  },
  {
    value: 5,
    label: '5%',
  },
  {
    value: 7.5,
    label: '7.5%',
  },
  {
    value: 10,
    label: '10%',
  },
];
  return(
    <Card className={classes.individualFilter}>
      <Typography id="range-slider" gutterBottom>
        Minimum Engagement
      </Typography>
      <div style={{margin:"0px 20px"}}>
        <Slider
          defaultValue={1.0}
          min={0.0}
          max={10.0}
          step={0.5}
          valueLabelDisplay="auto"
          aria-labelledby="discrete-slider-always"
          marks={marks}
          onChangeCommitted={(e, v) => props.engagementHandler(v)}
        />
      </div>
    </Card>
  );
}

// slider
function FollowerFilter(){
  const classes = useStyles();
  const marks = [
    // {
    //   value: 3000,
    //   label: '3k',
    // },
    {
      value: 10000,
      label: '10k',
    },
    {
      value: 50000,
      label: '50k',
    },
    {
      value: 100000,
      label: '100k',
    },
  ];
  return(
    <Card className={classes.individualFilter}>
      <Typography id="range-slider" gutterBottom>
        Follower Range
      </Typography>
      <div style={{margin:"0px 20px"}}>
        <Slider
          defaultValue={10000}
          min={3000}
          max={100000}
          valueLabelDisplay="auto"
          aria-labelledby="discrete-slider-always"
          marks={marks}
        />
      </div>
    </Card>
  );
}

function EthnicityFilter(){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <FormControl className={classes.formControl}>
        <InputLabel id="ethnicity">Ethnicity</InputLabel>
        <Select
          labelId="ethnicity" 
          id="ethnicity-select"
        >
          <MenuItem value={0}>🏻</MenuItem>
          <MenuItem value={1}>🏼</MenuItem>
          <MenuItem value={2}>🏽</MenuItem>
          <MenuItem value={3}>🏾</MenuItem>
          <MenuItem value={4}>🏿</MenuItem>
        </Select>
      </FormControl>
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

// checkbox
function EmailFilter(props){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <div>
        <GridContainer
          justify="space-evenly" 
          alignItems="center"
        >
          <Typography gutterBottom>
            Contains Email
          </Typography>
          <IconButton 
            aria-label="set email search bool" 
            onClick={props.emailHandler}
          >
            <Checkbox color="primary" />
          </IconButton>
        </GridContainer>
      </div>
    </Card>
  );
}

function LanguageFilter(){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <FormControl className={classes.formControl}>
        <InputLabel id="language">Language</InputLabel>
        <Select
          labelId="language" 
          id="language-select"
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'es'}>Spanish</MenuItem>
          <MenuItem value={'pt'}>Portuguese</MenuItem>
          <MenuItem value={'ru'}>Russian</MenuItem>
        </Select>
      </FormControl>
    </Card>
  );
}