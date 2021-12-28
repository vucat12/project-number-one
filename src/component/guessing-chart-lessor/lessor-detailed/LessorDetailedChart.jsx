import { Chart } from 'primereact/chart'
import React, { useEffect, useState } from 'react'
import { HaNoi, HoChiMinh, DaNang, listColor } from "../../init-default/guessingDistrict";
import { PriceServices } from '../../../services/priceServices';
import { useHistory } from "react-router";

export default function LessorDetailedChart() {
    const [valueDetailed, setValueDetailed] = useState([]);
    const priceServices = PriceServices
    const history = useHistory();

    let basicData = {
        labels: ['25/10/2021','1/11/2021','8/11/2021','15/11/2021','19/11/2021', 'Tương Lai'],
        datasets: valueDetailed
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

    const getDataChart = () => {
        let dataState = history.location.state;
        let valueChart = [];
        if(dataState?.province == "Hà Nội") {
            HaNoi.forEach(async (el, index) => {
                await priceServices.getLessorPriceByProvince("Hà Nội", el).then(res => {
                    valueChart.push({
                        label: el,
                        data: res,
                        fill: false,
                        borderColor: listColor[index],
                        tension: .4
                    })
                })

                if(index === HaNoi.length-1) {
                    setValueDetailed(valueChart)
                }

            })
        } 
        else if(dataState?.province == "Đà Nẵng") {
            DaNang.forEach(async (el, index) => {
                await priceServices.getLessorPriceByProvince("Đà Nẵng", el).then(res => {
                    valueChart.push({
                        label: el,
                        data: res,
                        fill: false,
                        borderColor: listColor[index],
                        tension: .4
                    })
                })
                if(index === DaNang.length-1) {
                    setValueDetailed(valueChart)
                }
            })
        } 
        else if(dataState?.province == "Hồ Chí Minh") {
            HoChiMinh.forEach(async (el, index) => {
                await priceServices.getLessorPriceByProvince("Hồ Chí Minh", el).then(res => {
                    valueChart.push({
                        label: el,
                        data: res,
                        fill: false,
                        borderColor: listColor[index],
                        tension: .4
                    })
                })
                if(index === DaNang.length-1) {
                    setValueDetailed(valueChart)
                }
            })
        }

    }

    useEffect(() => {
        getDataChart();
    }, []);

    return (
        <div className="guessing-chart">
        <div className="view-chart-title" style={{fontSize: '20px', textTransform: 'uppercase'}}>
            Thông tin biểu đồ về tăng trưởng bất động sản (triệu / m2)
        </div>
        <div className="chart-center">
            {valueDetailed.length > 0 && <Chart type="line" data={basicData} options={basicOptions} height="600px" width="1200px"/> }
        </div>
        </div>
    )
}
