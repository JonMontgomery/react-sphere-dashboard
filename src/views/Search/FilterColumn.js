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
        <TagFilter 
          tags={props.tags}
          tagHandler={props.tagHandler}
        />
        <LocationFilter 
          location={props.location}
          locationHandler={props.locationHandler} 
        />
        <EngagementFilter 
          engagement={props.engagement}
          engagementHandler={props.engagementHandler} />
        <FollowerFilter
          followerRange={props.followerRange}
          followerRangeHandler={props.followerRangeHandler}
         />
        <EmailFilter 
          emailBool={props.emailBool}
          emailBoolHandler={props.emailBoolHandler} 
        />
        <LanguageFilter 
          language={props.language}
          languageHandler={props.languageHandler}
        />
      </div>
    </Card>
  );
}

function TagFilter(props){
  const classes = useStyles();

  return(
    <Card className={classes.individualFilter}>
      <FormControl className={classes.formControl}>
        <InputLabel id="tags">Tags</InputLabel>
        <Select
          labelId="tags" 
          id="tags-select"
          onChange={(e) => {props.tagHandler([...props.tags, e.target.value])}}
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
        {props.tags.map((tag) => (
          <TagChip key={tag} tag={tag} />
        ))}
      </GridContainer>
    </Card>
  );
}

//reduce gutter
function TagChip(props){
  return(
    <GridItem>
      <Chip
        // icon={<LocalMallIcon />}
        label={props.tag}
        style={{margin:"2px"}}
      />
    </GridItem>
  );
}

function LocationFilter(props){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <FormControl className={classes.formControl}>
        <InputLabel id="location">Location</InputLabel>
        <Select
          labelId="location" 
          id="location-select"
          value={props.location}
          onChange={(e) => props.locationHandler(e.target.value)}
        >
          <MenuItem value={212999109}>Los Angeles, California</MenuItem>
          <MenuItem value={212988663}>New York, New York</MenuItem>
          <MenuItem value={212970049}>Beverly Hills, California</MenuItem>
          <MenuItem value={212901056}>Las Vegas, Nevada</MenuItem>
          <MenuItem value={213873866}>Malibu, California</MenuItem>
          <MenuItem value={44961364}>San Francisco, California</MenuItem>
          <MenuItem value={212950988}>Brooklyn, New York</MenuItem>
          <MenuItem value={204517928}>Chicago, Illinois</MenuItem>
          <MenuItem value={20188833}>Manhattan, New York</MenuItem>
          <MenuItem value={137242643}>Santa Monica, California</MenuItem>
          <MenuItem value={212947533}>Atlanta, Georgia</MenuItem>
          <MenuItem value={213764719}>West Hollywood, California</MenuItem>
          <MenuItem value={212983635}>San Diego, California</MenuItem>
          <MenuItem value={212964995}>Austin, Texas</MenuItem>
          <MenuItem value={212900916}>Dallas, Texas</MenuItem>
          <MenuItem value={212962809}>Houston, Texas</MenuItem>
          <MenuItem value={212971112}>Orlando, Florida</MenuItem>
          <MenuItem value={212991559}>Toronto, Ontario</MenuItem>
          <MenuItem value={213387672}>Venice, California</MenuItem>
          <MenuItem value={213213692}>Nashville, Tennessee</MenuItem>
          <MenuItem value={213413990}>Newport Beach, California</MenuItem>
          <MenuItem value={213221157}>Calabasas, California</MenuItem>
          <MenuItem value={213445472}>Laguna Beach, California</MenuItem>
          <MenuItem value={211529586}>Phoenix, Arizona</MenuItem>
          <MenuItem value={206698624}>Boston, Massachusetts</MenuItem>
          <MenuItem value={213941548}>Seattle, Washington</MenuItem>
          <MenuItem value={214228753}>Philadelphia, Pennsylvania</MenuItem>
          <MenuItem value={213070948}>San Jose, California</MenuItem>
          <MenuItem value={4599325}>Denver, Colorado</MenuItem>
          <MenuItem value={208690144}>Scottsdale, Arizona</MenuItem>
          <MenuItem value={213424196}>New Orleans, Louisiana</MenuItem>
          <MenuItem value={213819997}>Vancouver, British Columbia</MenuItem>
          <MenuItem value={107711604}>Portland, Oregon</MenuItem>
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
          defaultValue={props.engagement}
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
function FollowerFilter(props){
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
          defaultValue={props.followerRange}
          min={3000}
          max={100000}
          onChangeCommitted={(e, v) => props.followerRangeHandler(v)}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
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
          <MenuItem value={0}><span>🏻</span></MenuItem>
          <MenuItem value={1}><span>🏼</span></MenuItem>
          <MenuItem value={2}><span>🏽</span></MenuItem>
          <MenuItem value={3}><span>🏾</span></MenuItem>
          <MenuItem value={4}><span>🏿</span></MenuItem>
        </Select>
      </FormControl>
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
            onClick={props.emailBoolHandler}
          >
            <Checkbox color="primary" />
          </IconButton>
        </GridContainer>
      </div>
    </Card>
  );
}

function LanguageFilter(props){
  const classes = useStyles();
  return(
    <Card className={classes.individualFilter}>
      <FormControl className={classes.formControl}>
        <InputLabel id="language">Language</InputLabel>
        <Select
          labelId="language" 
          id="language-select"
          value={props.language}
          onChange={(e) => props.languageHandler(e.target.value)}
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