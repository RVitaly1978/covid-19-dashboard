import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

import {
  chooseDataToChart,
  getChartOptions,
  formattingDate,
  formattingNumberLabel,
  numberWithSpaces,
} from '../../helpers';

import st from './chart-info.module.scss';

const initOptions = {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: '',
      borderColor: '',
      barThickness: 4,
    }]
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      mode: 'nearest',
      displayColors: false,
      callbacks: {
        label: (tooltipItem) => String(numberWithSpaces(tooltipItem.yLabel)),
        title: (tooltipItem) => formattingDate(tooltipItem[0].xLabel, false),
      },
      bodyFontStyle: 'bold',
      backgroundColor: '#f0f0f0f6',
      titleFontColor: '#1a1a1afa',
    },
    layout: {
      padding: {
        left: 5,
        right: 10,
        top: 0,
        bottom: 5,
      },
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: (value) => formattingNumberLabel(value),
        },
      }],
      xAxes: [{
        type: 'time',
        time: {
          unit: 'month',
          stepSize: 2,
        },
      }]
    },
    legend: {
      align: 'start',
      labels: {
        fontColor: 'transparent',
        fontStyle: 'bold',
      },
    },
  },
};

const removeData = (chart) => {
  chart.data.labels = [];
  chart.data.datasets[0].data.length = 0;
  chart.data.datasets[0].backgroundColor = '';
  chart.data.datasets[0].borderColor = '';
  chart.data.datasets[0].label = '';
  chart.options.legend.labels.fontColor = '';
  chart.options.tooltips.bodyFontColor = '';
  chart.update();
}

const addData = (chart, chartOptions) => {
  if (!Object.keys(chartOptions).length) {
    removeData(chart);
    return;
  }

  const { labels, data, label, color } = chartOptions;

  chart.data.labels = [...labels];
  chart.data.datasets[0].data.length = 0;
  chart.data.datasets[0].data.push(...data);
  chart.data.datasets[0].backgroundColor = color;
  chart.data.datasets[0].borderColor = color;
  chart.data.datasets[0].label = label;
  chart.options.legend.labels.fontColor = color;
  chart.options.tooltips.bodyFontColor = color;

  chart.update();
}

const ChartInfo = ({
  historicalCovidData, historicalGlobalCovidData,
  filterCase, isDataNew, isDataPer100, slug,
}) => {
  const myChartRef = useRef();

  const chosenData = chooseDataToChart({ historicalCovidData, historicalGlobalCovidData }, slug);
  const chartOptions = getChartOptions(chosenData, { filterCase, isDataNew, isDataPer100 });

  useEffect(() => {
    let ctx = document.getElementById('chart').getContext('2d');
    myChartRef.current = new Chart(ctx, initOptions);
  }, []);

  useEffect(() => {
    myChartRef.current && addData(myChartRef.current, chartOptions);
    return () => myChartRef.current && removeData(myChartRef.current);
  }, [chartOptions]);

  return (
    <div className={st.view_container}>

      <canvas
        className={st.view_chart}
        id='chart'
        aria-label='Covid-19 charts'
        role='img'>
        Your browser does not support the canvas element
      </canvas>

    </div>
  );
}

export default ChartInfo;
