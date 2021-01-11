import React, { useEffect } from 'react';
import Chart from 'chart.js';

import st from './chart-info.module.scss';

const options = {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'case',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
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

const ChartInfo = ({ data }) => {

  useEffect(() => {
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, options);

    function addData(chart, data) {
      const labels = [];
      const dataset = [];

      data.forEach((dayData) => {
        labels.push(new Date(dayData.date));
        dataset.push(dayData.value);
      });

      chart.data.labels = [...labels];
      chart.data.datasets[0].data = [...dataset];

      chart.update();
    }

    addData(chart, data);

  }, [data]);

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
