import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

import { chooseDataToChart, getChartOptions } from '../../helpers';

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
      borderWidth: 1,
    }]
  },

  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 5,
        right: 30,
        top: 5,
        bottom: 5,
      },
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }],
      xAxes: [{
        type: 'time',
        time: {
          unit: 'month',
        }
      }]
    },
    legend: {
      display: true,
      align: 'end',
      labels: {
        fontColor: 'transparent',
      },
    },

    // tooltips: {
    //   mode: 'nearest',
    // },
    // animation: {
    //   duration: 0 // general animation time
    // },
    // hover: {
    //   animationDuration: 0 // duration of animations when hovering an item
    // },
    // responsiveAnimationDuration: 0, // animation duration after a resize
    // },

  }
};

const removeData = (chart) => {
  chart.data.labels = [];
  chart.data.datasets[0].data.length = 0;
  chart.data.datasets[0].backgroundColor = '';
  chart.data.datasets[0].borderColor = '';
  chart.data.datasets[0].label = '';
  chart.options.legend.labels.fontColor = '';
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
      <div className={st.view_content}>

        <canvas
          className={st.view_chart}
          id='chart'
          aria-label='Covid-19 charts'
          role='img'>
          Your browser does not support the canvas element
        </canvas>

      </div>
    </div>
  );
}

export default ChartInfo;
