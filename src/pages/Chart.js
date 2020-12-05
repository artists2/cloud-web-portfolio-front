import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

const data = [
  { year: "1950", population: 10.525 },
  { year: "1960", population: 20.018 },
  { year: "1970", population: 50.682 },
  { year: "1980", population: 60.44 },
  { year: "1990", population: 35.31 },
  { year: "2000", population: 20.127 },
  { year: "2010", population: 38.93 }
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper className="chart">
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis max={7} />
          <BarSeries valueField="population" argumentField="year" />
          <Title text="NULL" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
