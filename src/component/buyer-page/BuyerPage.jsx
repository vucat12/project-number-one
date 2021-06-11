import React, { useEffect, useState } from "react";
import { Chart } from 'primereact/chart';
import './BuyerPage.scss';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import Dropdown from 'react-dropdown';
import {Price} from '../init-default/price';
import { Area, areaSelected } from "../init-default/area";
import { getProvincesVN } from "../home-page/model/provinces";
import { useHistory } from "react-router";
import { BuyerService } from "../../services/buyerServices";

const listProvinces = getProvincesVN();
const productService = BuyerService;
const dataPrice = Price;

function BuyerPage() {
    const [products, setProducts] = useState();
    const [searchPrice, setSearch] = useState({priceValue: '', idPrice: ''});
    const [searchArea, setSearchArea] = useState({areaValue: '', idArea: ''});
    const [searchProvince, setSearchProvince] = useState('');
    const [dataCircle, setDataCircle] = useState([]);
    const [dataLine, setDataLine] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getHouse();
        getRatePercent();
    }, []);

    const getHouse = (idPrice, area, province) => {
        const data = {
            data: idPrice,
            area: area,
            province: province!=='All' ? province : undefined,
        }
        productService.getLowHouse(data).then((data) => {
            setProducts(data);
        });
    }

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
            labels: {
                fontColor: '#495057'
            }
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
    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.imageInf} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }

    const confirm = (event) => {
        getHouse(searchPrice.idPrice, searchArea.idArea, searchProvince);
    };

    const setPriceValue = (e) => {
        // productService.getLowHouse(e.value).then((data) => {
        //     setProducts(data);
        // });
        setSearch({priceValue: e.label, idPrice: e.value})
    }

    const setAreaValue = (e) => {
        setSearchArea({areaValue: e.label, idArea: e.value})
    }
    
    const viewPostDetail = async (e) => {
        let data = await productService.getPostDetail(e.data.linkPage).then((res) => res.data[0])
        history.push("/view-post",{data: data})
    }

  return (
      <div className="view-chart">
        <div className="search">
            <Dropdown className="Dropdown Dropdown-provinces mr-3" options={listProvinces} onChange={(e) => setSearchProvince(e.label)} value={searchProvince} placeholder="Tỉnh" />
            <Dropdown className="Dropdown mr-3" options={dataPrice} onChange={(e) => setPriceValue(e)} value={searchPrice.priceValue} placeholder="Giá nhà" />
            <Dropdown className="Dropdown mr-3" options={areaSelected} onChange={(e) => setAreaValue(e)} value={searchArea.areaValue}  placeholder="Diện tích" />
            <Button
            onClick={() => confirm()}
            icon="pi pi-search"
            label="Search"
            className="p-mr-2 ml-3"
            ></Button>
            <div className="result-found">
                <span style={{fontWeight: 'bold'}}>Tổng kết quả: {products?.length}</span>
            </div>
        </div>
          <div className="card table-data">
            <DataTable value={products} paginator rows={10} onRowClick={(e) => viewPostDetail(e)}>
                <Column body={imageBodyTemplate} header="Image"></Column>
                <Column field="titleInf" header="Tiêu đề"></Column>
                <Column field="priceInf" header="Giá"></Column>
                <Column field="descriptionInf" header="Mô tả"></Column>
                <Column field="areaInf" header="Diên tích"></Column>
                <Column field="addressInf" header="Địa chỉ"></Column>
            </DataTable>
            </div>
        <div className="view-chart-title">
            Thông tin biểu đồ về thị trường bất động sản Việt Nam
        </div>
        <div className="card">
                <h5>Biểu đồ tròn diện tích đất cần bán (% m2)</h5>
                <Chart width="519px" height="600px" type="pie" data={chartData} options={lightOptions} />
        </div>
        <div className="card" style={{paddingTop: '32px'}}>
            <h5>Biểu đồ ngang dữ liệu cụ thể (Toàn quốc)</h5>
            <Chart width="1000px" height="600px" type="horizontalBar" data={basicData} options={basicOptions} />
        </div>
      </div>
 
  );
}

export default BuyerPage;
