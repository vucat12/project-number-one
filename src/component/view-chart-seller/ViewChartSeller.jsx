import { Chart } from 'primereact/chart'
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { SellerService } from '../../services/sellerServices';
import { getProvincesVN } from '../home-page/model/provinces';
import { Area } from "../init-default/area";
import { Button } from "primereact/button";
import { labelPrice } from "../init-default/price";

const listProvinces = getProvincesVN();

function ViewChartSeller() {
    const productService = SellerService;
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
                label: 'S??? l?????ng nh?? (m2)',
                backgroundColor: '#3300CC',
                data: dataLine,
            },
        ]
    };
    const basicDataPrice = {
        labels: labelPrice,
        datasets: [
            {
                label: 'S??? l?????ng nh?? (t???)',
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

    return (
        <div className="chart-center">

        <div className="dropdown-search padding-left-60 pt-3">
            <Button label={isTypeChart ? 'Xem bi???u ????? gi??' : 'Xem bi???u ????? di???n t??ch'} onClick={() => handleChangeChart()}/>
            <Dropdown className="ml-3 Dropdown" options={listProvinces} onChange={(e) => handleChangeProvince(e.label)} value={valueProvinces} placeholder="Khu v???c"/> 
        </div>
            
        <div className="view-chart-title" style={{fontSize: '20px', textTransform: 'uppercase'}}>
            Th??ng tin bi???u ????? v??? th??? tr?????ng b???t ?????ng s???n Vi???t Nam
        </div>
        {
            isTypeChart && <div>
                <div className="card">
                <h4>Bi???u ????? tr??n di???n t??ch ?????t c???n b??n (% m2)</h4>
                <Chart width="600px" height="600px" type="pie" data={chartData} options={lightOptions} />
                </div>
                <div className="card" style={{paddingTop: '32px'}}>
                    <h5>Bi???u ????? ngang d??? li???u di???n t??ch c??? th???</h5>
                    <Chart width="1000px" height="600px" type="horizontalBar" data={basicData} options={basicOptions} />
                </div>
            </div>
        }
        {
            !isTypeChart && <div>
                <div className="card">
                <h5>Bi???u ????? tr??n gi?? ?????t c???n b??n (t???)</h5>
                <Chart width="600px" height="600px" type="pie" data={chartDataPrice} options={lightOptions} />
                </div>
                <div className="card" style={{paddingTop: '32px'}}>
                    <h5>Bi???u ????? ngang d??? li???u gi?? c??? th???</h5>
                    <div>
                        <Chart width="500px" height="500px" type="horizontalBar" data={basicDataPrice} options={basicOptions} />
                    </div>
                </div>
            </div>
        }


        </div>
    )
}

export default ViewChartSeller
