import React, { useEffect } from 'react';
import Chart from 'chart.js';

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
    // legend: {
    //   display: true,
    //   align: 'end',
    //   labels: {
    //     fontColor: 'rgb(255, 99, 132)',
    //   }
    // },

  }
};

const ChartInfo = ({ chartOptions = {} }) => {

  useEffect(() => {
    let ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, initOptions);

    function addData(chart, chartOptions) {
      if (!Object.keys(chartOptions).length) {
        chart.data.labels = [];
        chart.data.datasets[0].data.length = 0;
        chart.data.datasets[0].backgroundColor = '';
        chart.data.datasets[0].borderColor = '';
        chart.data.datasets[0].label = '';
        chart.update();
        return;
      }

      const { labels, data, label, color } = chartOptions;

      chart.data.labels = [...labels];
      chart.data.datasets[0].data.length = 0;
      chart.data.datasets[0].data.push(...data);
      chart.data.datasets[0].backgroundColor = color;
      chart.data.datasets[0].borderColor = color;
      chart.data.datasets[0].label = label;
      chart.update();
    }

    addData(chart, chartOptions);
    chart.update();

    return () => ctx = undefined;
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
