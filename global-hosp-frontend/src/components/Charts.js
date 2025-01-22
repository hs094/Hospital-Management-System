import React from "react";
import Chartist from "react-chartist";
// import './chartist/dist/chartist.min.css'; // Ensure you include Chartist's CSS
import ChartistTooltip from 'chartist-plugin-tooltips-updated'; // Ensure this is compatible with v6 or use an alternative tooltip library

export const SalesValueChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [[1, 2, 2, 3, 3, 4, 3]]
  };

  const options = {
    low: 0,
    showArea: true,
    fullWidth: true,
    axisX: {
      position: 'end',
      showGrid: true
    },
    axisY: {
      showGrid: false,
      showLabel: true,
      labelInterpolationFnc: value => `$${value}k`
    },
    // plugins: [ChartistTooltip()]
  };

  return (
    <Chartist
      data={data}
      options={options}
      type="Line"
      className="ct-series-g ct-double-octave"
    />
  );
};

export const SalesValueChartphone = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [[1, 2, 2, 3, 3, 4, 3]]
  };

  const options = {
    low: 0,
    showArea: true,
    fullWidth: false,
    axisX: {
      position: 'end',
      showGrid: true
    },
    axisY: {
      showGrid: false,
      showLabel: true,
      labelInterpolationFnc: value => `$${value}k`
    },
    // plugins: [ChartistTooltip()]
  };

  return (
    <Chartist
      data={data}
      options={options}
      type="Line"
      className="ct-series-g ct-major-tenth"
    />
  );
};

export const CircleChart = (props) => {
  const { series = [], donutWidth = 20 } = props;
  const sum = (a, b) => a + b;

  const options = {
    donut: true,
    donutWidth,
    donutSolid: true,
    showLabel: true,
    labelInterpolationFnc: value => `${Math.round((value / series.reduce(sum)) * 100)}%`,
    // plugins: [ChartistTooltip()]
  };

  return (
    <Chartist
      data={{ series }}
      options={options}
      type="Pie"
      className="ct-golden-section"
    />
  );
};

export const BarChart = (props) => {
  const { labels = [], series = [], chartClassName = "ct-golden-section" } = props;
  const data = { labels, series };

  const options = {
    low: 0,
    showArea: true,
    axisX: {
      position: 'end'
    },
    axisY: {
      showGrid: false,
      showLabel: true,
      offset: 0
    },
    // plugins: [ChartistTooltip()]
  };

  return (
    <Chartist
      data={data}
      options={options}
      type="Bar"
      className={chartClassName}
    />
  );
};