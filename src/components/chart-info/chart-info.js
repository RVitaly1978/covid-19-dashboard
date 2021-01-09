import React, { useEffect } from 'react';
import Chart from 'chart.js';

import st from './chart-info.module.scss';

const options = {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
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

const ChartInfo = () => {

  useEffect(() => {
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, options);
    chart.update(options);
  }, []);

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
