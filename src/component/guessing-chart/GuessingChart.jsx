import { Chart } from 'primereact/chart'
import React from 'react'

export default function GuessingChart() {
    const basicData = {
        labels: ['Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12','Tháng 1', 'Tháng 2'],
        datasets: [
            {
                label: 'Hà Nội',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            },
            {
                label: 'Hồ Chí Minh',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: '#FFA726',
                tension: .4
            }
        ]
    };
    let basicOptions = {
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    return (
        <div className="guessing-chart">
        <div className="view-chart-title" style={{fontSize: '20px', textTransform: 'uppercase'}}>
            Thông tin biểu đồ về tăng trưởng bất động sản
        </div>
        <div className="chart-center">
        <Chart type="line" data={basicData} options={basicOptions} height="600px" width="1200px"/>
        </div>
        </div>
    )
}
