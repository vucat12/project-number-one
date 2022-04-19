
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const AiSellerPage = () => {
    const [chartData] = useState({
        labels: ['A', 'B', 'C'],
        datasets: [{
            label: 'Tham khao',
            data: [
            {
            x: -5,
            y: 0
            }, {
            x: 0,   
            y: 10
            }, {
            x: 10,
            y: 20
            }, {
            x: 0.5,
            y: 5.5
            },{
            x: 1.5,
            y: 30
            },{
            x: 2.5,
            y: 5.5
            },{
            x: 2.5,
            y: 3
            },{
            x: 4,
            y: 4
            }
            ],
            backgroundColor: 'rgb(255, 99, 132)'
        }],
    });

    const [chartLine] = useState({
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', ],
        datasets: [
            {
                label: 'My First Dataset',
                data: [0, 10, 25, 30, 40, 55, 60],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
        ]
    });

    const [lightOptions] = useState({
        plugins: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });

    const basicOptions = {
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
        <div className="flex">
            <div className="card">
                <Chart type="scatter" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
            </div>
            <div className="card">
                <Chart type="line" data={chartLine} options={basicOptions} style={{ position: 'relative', width: '40%' }} />
            </div>
        </div>

    )
}

export default AiSellerPage;
                 