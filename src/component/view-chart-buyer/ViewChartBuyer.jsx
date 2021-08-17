import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart'
import React, { useEffect, useState } from 'react';
import { BuyerService } from '../../services/buyerServices';
import { Area } from "../init-default/area";
import Dropdown from 'react-dropdown';
import { labelPrice } from "../init-default/price";
import { getProvincesVN } from '../home-page/model/provinces';

const listProvinces = getProvincesVN();

function ViewChartBuyer() {
    const productService = BuyerService;
    const [dataCircle, setDataCircle] = useState([]);
    const [dataLine, setDataLine] = useState([]);
    const [valueProvinces, setProvince] = useState('');
    const [isTypeChart, setIsTypeChart] = useState(true);


    useEffect(() => {
        if(isTypeChart) {
            getRatePercent();
        }
        if(!isTypeChart)
            getPriceData(valueProvinces);
    }, [isTypeChart]);

    const getRatePercent = async() => {
        let response = {dataCircle: [], dataLine: []};
        await productService.getRatePercent().then((res) => {
            response.dataLine = res.sumHouses.map(el => el);
            response.dataCircle = res.dataPercent.map(el => el);
        });
        setDataCircle(response.dataCircle);
        setDataLine(response.dataLine)
    }

    const getPriceData = async(province) => {
        let response = {dataCircle: [], dataLine: []};
        await productService.getPriceByProvince(province).then(res => {
            console.log(res.data);
            response.dataLine = res.data.sumHouses.map(el => el);
            response.dataCircle = res.data.dataPercent.map(el => el);
        })
        setDataCircle(response.dataCircle);
        setDataLine(response.dataLine)
    }

    async function getRateByProvince(province) {
        let response = {dataCircle: [], dataLine: []};
        await productService.getRatePercentByProvince(province).then(res => {
            response.dataLine = res.data.sumHouses.map(el => el);
            response.dataCircle = res.data.dataPercent.map(el => el);
        })
        setDataCircle(response.dataCircle);
        setDataLine(response.dataLine)
    }

    const handleChangeProvince = async (e) => {
        if(isTypeChart) {
            if(e === 'All') {
                await getRatePercent();
            }
            else {
                await getRateByProvince(e)
            }
        }
        else {
            getPriceData(e);
        }
        
        setProvince(e)
    }

    const handleChangeChart = async () => {
        setProvince('All')
        setIsTypeChart(!isTypeChart);
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
                    "#33FF33",
                    "#FFCEAA",
                    "#FF6312",
                    "#36A232",
                    "#FFCCFF",
                    "#FF0000",
                    "#0000EE",
                    "#FFCE56",
                    "#666666"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EE",
                    "#FFCCCC",
                    "#FF63FF",
                    "#33FF33",
                    "#FFCEAA",
                    "#FF6312",
                    "#36A232",
                    "#FFCCFF",
                    "#FF0000",
                    "#0000EE",
                    "#FFCE56",
                    "#666666"
                ]
            }]
    };

    let chartDataPrice = {
        labels: labelPrice,
        datasets: [
            {
                data: dataCircle,
                backgroundColor: [
                    "#36A232",
                    "#FFCEEE",
                    "#FF6344",
                    "#0099FF",
                    "#FFCE56",
                ],
                hoverBackgroundColor: [
                    "#36A232",
                    "#FFCEEE",
                    "#FF6344",
                    "#0099FF",
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
                label: 'Số lượng nhà (m2)',
                backgroundColor: '#3300CC',
                data: dataLine,
            },
        ]
    };
    const basicDataPrice = {
        labels: labelPrice,
        datasets: [
            {
                label: 'Số lượng nhà (tỷ)',
                backgroundColor: '#3300CC',
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

        <div className="dropdown-search padding-left-60 pt-3">
            <Button label={isTypeChart ? 'Xem biểu đồ giá' : 'Xem biểu đồ diện tích'} onClick={() => handleChangeChart()}/>
            <Dropdown className="ml-3 Dropdown" options={listProvinces} onChange={(e) => handleChangeProvince(e.label)} value={valueProvinces} placeholder="Khu vực"/> 
        </div>
            
        <div className="view-chart-title" style={{fontSize: '20px', textTransform: 'uppercase'}}>
            Thông tin biểu đồ về thị trường bất động sản Việt Nam
        </div>
        {
            isTypeChart && <div>
                <div className="card">
                <h4>Biểu đồ tròn diện tích đất cần mua (% m2)</h4>
                <Chart width="600px" height="600px" type="pie" data={chartData} options={lightOptions} />
                </div>
                <div className="card" style={{paddingTop: '32px'}}>
                    <h5>Biểu đồ ngang dữ liệu diện tích cụ thể</h5>
                    <Chart width="1000px" height="600px" type="horizontalBar" data={basicData} options={basicOptions} />
                </div>
            </div>
        }
        {
            !isTypeChart && <div>
                <div className="card">
                <h5>Biểu đồ tròn giá đất cần bán (tỷ)</h5>
                <Chart width="600px" height="600px" type="pie" data={chartDataPrice} options={lightOptions} />
                </div>
                <div className="card" style={{paddingTop: '32px'}}>
                    <h5>Biểu đồ ngang dữ liệu giá cụ thể</h5>
                    <Chart width="500px" height="500px" type="horizontalBar" data={basicDataPrice} options={basicOptions} />
                </div>
            </div>
        }

        </div>
    )
}

export default ViewChartBuyer
