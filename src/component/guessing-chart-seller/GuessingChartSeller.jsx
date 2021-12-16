import { Chart } from 'primereact/chart'
import React, { useEffect, useState } from 'react'
import { PriceServices } from "../../services/priceServices";
import { Button } from 'primereact/button';

const priceServices = PriceServices
export default function GuessingChartSeller() {

    const [valueDaNang, setValueDaNang] = useState([]);
    const [valueHoChiMinh, setValueHoChiMinh] = useState([]);
    const [valueHaNoi, setValueHaNoi] = useState([]);

    const basicData = {
        labels: ['25/10/2021','1/11/2021','8/11/2021','15/11/2021','19/11/2021', 'Tương Lai'],
        datasets: [
            {
                label: 'Đà Nẵng',
                data: valueDaNang,
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            },
            {
                label: 'Hồ Chí Minh',
                data: valueHoChiMinh,
                fill: false,
                borderColor: '#FFA726',
                tension: .4
            },
            {
                label: 'Hà Nội',
                data: valueHaNoi,
                fill: false,
                borderColor: '#FF6384',
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

    useEffect(() => {
        priceServices.getSellerPriceByProvince("Đà Nẵng").then(res => {
            setValueDaNang(res);
        })
        priceServices.getSellerPriceByProvince("Hồ Chí Minh").then(res => {
            setValueHoChiMinh(res)
        })
        priceServices.getSellerPriceByProvince("Hà Nội").then(res => {
            setValueHaNoi(res)
        })
    }, []);

    return (
        <div className="guessing-chart">
        <div className="view-chart-title" style={{fontSize: '20px', textTransform: 'uppercase'}}>
            Thông tin biểu đồ về tăng trưởng bất động sản (triệu / m2)
        </div>
        <div>
            <Button label="Xem thông tin chi tiết thành phố" />
        </div>
        <div className="chart-center">
        <Chart type="line" data={basicData} options={basicOptions} height="600px" width="1200px"/>
        </div>
        </div>
    )
}