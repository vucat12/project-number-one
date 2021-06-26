import { Chart } from 'primereact/chart'
import React, { useEffect, useState } from 'react';
import { SellerService } from '../../services/sellerServices';
import { Area, areaSelected } from "../init-default/area";

function ViewChartSeller() {
    const productService = SellerService;
    const [dataCircle, setDataCircle] = useState([]);
    const [dataLine, setDataLine] = useState([]);

    useEffect(() => {
        getRatePercent();
    }, []);

    const getRatePercent = async() => {
        let response = {dataCircle: [], dataLine: []};
        await productService.getRatePercent().then((res) => {
            response.dataLine = res.sumHouses.map(el => el);
            response.dataCircle = res.dataPercent.map(el => el);
        });
        setDataCircle(response.dataCircle);
        setDataLine(response.dataLine)
    }

    let chartData = {
        labels: Area,
        datasets: [
            {
                data: dataCircle,
                backgroundColor: [
                    "#FF6384",
                    "#36A2EE",
                    "#FFCCCC",
                    "#FF63FF",
                    "#36ACCC",
                    "#FFCEAA",
                    "#FF6312",
                    "#36A232",
                    "#FFCEEE",
                    "#FF6344",
                    "#36A123",
                    "#FFCE56",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EE",
                    "#FFCCCC",
                    "#FF63FF",
                    "#36ACCC",
                    "#FFCEAA",
                    "#FF6312",
                    "#36A232",
                    "#FFCEEE",
                    "#FF6344",
                    "#36A123",
                    "#FFCE56",
                ]
            }]
    };

    const lightOptions = {
        legend: {
            reponsive: true,
            position: 'right',
            labels: {
                fontColor: '#495057'
            },
        }
    };

    const basicData = {
        labels: Area,
        datasets: [
            {
                label: 'Số lượng nhà',
                backgroundColor: '#FF6384',
                data: dataLine,
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
        <div className="chart-center">
            
        <div className="view-chart-title" style={{fontSize: '20px', textTransform: 'uppercase'}}>
            Thông tin biểu đồ về thị trường bất động sản Việt Nam
        </div>
        <div className="card">
                <h5>Biểu đồ tròn diện tích đất cần bán (% m2)</h5>
                <Chart width="600px" height="600px" type="pie" data={chartData} options={lightOptions} />
        </div>
        <div className="card" style={{paddingTop: '32px'}}>
            <h5>Biểu đồ ngang dữ liệu cụ thể (Toàn quốc)</h5>
            <Chart width="1000px" height="600px" type="horizontalBar" data={basicData} options={basicOptions} />
        </div>


        </div>
    )
}

export default ViewChartSeller
