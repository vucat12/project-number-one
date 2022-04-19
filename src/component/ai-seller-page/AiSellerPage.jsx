
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
            y: 5
            }, {
            x: 0.5,
            y: 5.5
            },{
            x: 1.5,
            y: 5.5
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

    return (
        <div className="card flex justify-content-center">
            <Chart type="scatter" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
        </div>
    )
}

export default AiSellerPage;
                 