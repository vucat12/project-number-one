import React from "react";
import { Chart } from 'primereact/chart';
import './ViewChart.scss';

function ViewChart() {
    const chartData = {
        labels: ['Khu vực miền Nam', 'Khu vực miền Trung', 'Khu vực miền Bắc'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };

    const lightOptions = {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        }
    };



    const basicData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Chi tiết miền Nam',
                backgroundColor: '#FF6384',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'Chi tiết miền Trung',
                backgroundColor: '#36A2EB',
                data: [28, 48, 40, 19, 86, 27, 90]
            },
            {
                label: 'Chi tiết miền Bắc',
                backgroundColor: '#FFCE56',
                data: [30, 40, 70, 80, 20, 70, 40]
            },
        ]
    };
    let basicOptions = {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: '#495057'
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: '#495057'
                }
            }]
        }
    };


  return (
      <div className="view-chart">
        <div className="view-chart-title">
            Thông tin biểu đồ về thị trường bất động sản Việt Nam
        </div>
        <div className="card">
                <h5>Biểu đồ tròn</h5>
                <Chart width={519} height={600} type="pie" data={chartData} options={lightOptions} />
        </div>
        <div className="card" style={{paddingTop: '32px'}}>
            <h5>Biểu đồ ngang</h5>
            <Chart width={1000} height={600} type="horizontalBar" data={basicData} options={basicOptions} />
        </div>
      </div>
 
  );
}

export default ViewChart;
