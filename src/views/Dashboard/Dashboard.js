import React from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
          <p className={classes.cardCategory}>EARNING (MONTHLY)</p>
              <h3 className={classes.cardTitle}>
              $40,000<small style={{marginLeft:"130px"}}><i class="fa fa-credit-card" aria-hidden="true"></i></small>
          </h3>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
          <p className={classes.cardCategory}>EARNING (MONTHLY)</p>
              <h3 className={classes.cardTitle}>
              $40,000<small  style={{marginLeft:"130px"}}><i class="fa fa-credit-card" aria-hidden="true"></i></small>
          </h3>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
          <p className={classes.cardCategory}>Earning (Annual)</p>
              <h3 className={classes.cardTitle}>
              $40,000<small  style={{marginLeft:"130px"}}><i class="fa fa-credit-card" aria-hidden="true"></i></small>
          </h3>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
          <p className={classes.cardCategory}>Pending request</p>
              <h3 className={classes.cardTitle}>
              $40,000<small  style={{marginLeft:"130px"}}><i class="fa fa-credit-card" aria-hidden="true"></i></small>
          </h3>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
          <p className={classes.cardCategory}>Pending request</p>
              <h3 className={classes.cardTitle}>
              $40,000<small  style={{marginLeft:"130px"}}><i class="fa fa-credit-card" aria-hidden="true"></i></small>
          </h3>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
          <p className={classes.cardCategory}>Pending request</p>
              <h3 className={classes.cardTitle}>
              $40,000<small  style={{marginLeft:"130px"}}><i class="fa fa-credit-card" aria-hidden="true"></i></small>
          </h3>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
          <p className={classes.cardCategory}>Pending request</p>
              <h3 className={classes.cardTitle}>
              $40,000<small  style={{marginLeft:"130px"}}><i class="fa fa-credit-card" aria-hidden="true"></i></small>
          </h3>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
          <p className={classes.cardCategory}>Pending request</p>
              <h3 className={classes.cardTitle}>
              $40,000<small  style={{marginLeft:"130px"}}><i class="fa fa-credit-card" aria-hidden="true"></i></small>
          </h3>
          </Card>
        </GridItem>
      </GridContainer>
     </div>
       );
 }
