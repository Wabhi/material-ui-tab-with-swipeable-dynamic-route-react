import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}));

function MyTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const styles = {
    tabs: {
      background: "#fff"
    },
    slide: {
      padding: 15,
      minHeight: 100,
      color: "#fff"
    },
    slide1: {
      backgroundColor: "#FEA900"
    },
    slide2: {
      backgroundColor: "#B3DC4A"
    },
    slide3: {
      backgroundColor: "#6AC0FF"
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} to="/One" component={Link} />
          <Tab label="Item Two" {...a11yProps(1)} to="/Two" component={Link} />
          <Tab
            label="Item Three"
            {...a11yProps(2)}
            to="/Three"
            component={Link}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          className="table-panel"
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            slide n°1
          </div>{" "}
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          className="table-panel"
        >
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            slide n°2
          </div>{" "}
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          dir={theme.direction}
          className="table-panel"
        >
          Item Three
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            slide n°3
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default function TabsRouter() {
  return (
    <div>
      <Router>
        <MyTabs />
      </Router>
    </div>
  );
}
