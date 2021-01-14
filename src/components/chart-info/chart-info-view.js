import React, { useEffect } from 'react';
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
        fontColor: 'rgb(255, 99, 132)',
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
    // layout: {
    //   padding: {
    //     left: 150,
    //     right: 50,
    //     top: 20,
    //     bottom: 40
    //   }
    // },

  }
};

const ChartInfo = ({
  historicalCovidData, historicalGlobalCovidData,
  filterCase, isDataNew, isDataPer100, slug,
}) => {

  const chosenData = chooseDataToChart({ historicalCovidData, historicalGlobalCovidData }, slug);
  const chartOptions = getChartOptions(chosenData, { filterCase, isDataNew, isDataPer100 });

  useEffect(() => {
    let ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, initOptions);

    function removeData(chart) {
      chart.data.labels = [];
      chart.data.datasets[0].data.length = 0;
      chart.data.datasets[0].backgroundColor = '';
      chart.data.datasets[0].borderColor = '';
      chart.data.datasets[0].label = '';
      chart.options.legend.labels.fontColor = '';
      chart.update();
    }

    function addData(chart, chartOptions) {
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

    addData(chart, chartOptions);

    return () => removeData(chart);
  }, [chartOptions]);

  return (
    <div className={st.view_container}>
      <div className={st.view_content}>

        <canvas
          id='chart'
          width='400'
          height='100'
          aria-label='Covid-19 charts'
          role='img'>
          Your browser does not support the canvas element
        </canvas>

      </div>
    </div>
  );
}

export default ChartInfo;
