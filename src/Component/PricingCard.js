import React from "react";

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography
} from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    header: {
        backgroundColor: "#EEE",
    },
    pricing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: "16px",
    },
    descriptions: {
        margin: 0,
        padding: 0,
        listStyle: "none",
    },
})

export default function PricingCard() {
  const classes = useStyles()
  return (
    <Card>
      <CardHeader
        title="Free"
        titleTypographyProps={{ align: "center" }}
        className={classes.header}
      />
      <CardContent>
        <div className={classes.pricing}>
          <Typography variant="h3" color="textPrimary">
            $0
          </Typography>
          <Typography variant="h6" color="textSecondary">
            /mo
          </Typography>
        </div>
        <ul className={classes.descriptions}>
          {["2 GB of storage", "Help center access", "Email support"].map(
            (line) => (
              <Typography
                component="li"
                variant="subtitle1"
                align="center"
                key={line}
              >
                {line}
              </Typography>
            )
          )}
        </ul>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" color="primary">
          Sign up for free
        </Button>
      </CardActions>
    </Card>
  )
}