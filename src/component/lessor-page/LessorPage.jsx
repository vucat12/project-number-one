import React, { useEffect, useState } from "react";
import './LessorPage.scss';
import { LessorService } from "../../services/lessorServices";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import Dropdown from 'react-dropdown';
import {Price} from '../init-default/price';
import { areaSelected } from "../init-default/area";
import { getProvincesVN } from "../home-page/model/provinces";
import { useHistory } from "react-router";
import { getDistricts } from "pc-vn";

const listProvinces = getProvincesVN();
const productService = LessorService;
const dataPrice = Price;
const listDistrict = getDistricts();

function LessorPage() {
    const [products, setProducts] = useState();
    const [searchPrice, setSearch] = useState({priceValue: '', idPrice: ''});
    const [searchArea, setSearchArea] = useState({areaValue: '', idArea: ''});
    const [searchProvince, setSearchProvince] = useState('');
    const [searchDistrict, setDistrict] = useState('');
    const [listOptionsDistrict, setOptionsDistrict] = useState('');

    const history = useHistory();


    useEffect(() => {
        let dataState = history.location.state;
        if(dataState?.priceValue) {
            setSearch({
                priceValue: dataPrice.filter(el => el.value===dataState.priceValue)[0].label,
                idPrice: dataState?.price
            });
        }
        if(dataState?.area) {
            setSearchArea({
                idArea: dataState.area,
                areaValue: areaSelected.filter(el => el.value===dataState.area)[0].label
            })
        }
        if(dataState?.province) {
            setSearchProvince(dataState.province)
            setOptionsDistrict(listDistrict.filter(el => el.province_name === dataState.province));
        }
        if(dataState?.district) {
            setDistrict(dataState.district)
        }

        getHouse(dataState?.priceValue, dataState?.area, dataState?.province, dataState?.district);
    }, []);

    const getHouse = (idPrice, area, province, district) => {
        const data = {
            data: idPrice ? idPrice : undefined,
            area: area ? area : undefined,
            province: province!=='All' ? province : undefined,
            district: district!=='All' ? district : undefined,
        }
        productService.getLowHouse(data).then((data) => {
            setProducts(data);
        });
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.imageInf} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }

    const confirm = (event) => {
        getHouse(searchPrice.idPrice, searchArea.idArea, searchProvince, searchDistrict);
    };

    const setPriceValue = (e) => {
        setSearch({priceValue: e.label, idPrice: e.value})
    }

    const setAreaValue = (e) => {
        setSearchArea({areaValue: e.label, idArea: e.value})
    }

    const viewPostDetail = async (e) => {
        let data = await productService.getPostDetail(e.data.linkPage).then((res) => res.data[0])
        history.push("/view-post",{data: data})
    }

    const handleChangeProvince = (e) => {
        setOptionsDistrict(listDistrict.filter(el => el.province_name === e.label));
        setSearchProvince(e.label)
        setDistrict('');
    }
    
    
  return (
      <div className="view-chart">
        <div className="search">
            <Dropdown className="Dropdown Dropdown-provinces mr-3" options={listProvinces} onChange={(e) => handleChangeProvince(e)} value={searchProvince} placeholder="T???nh" />
            <Dropdown className="Dropdown mr-3" options={listOptionsDistrict} onChange={(e) => setDistrict(e.label)} value={searchDistrict} placeholder="Qu???n/ Huy???n" disabled={searchProvince === '' ? true : false}/>
            <Dropdown className="Dropdown mr-3" options={dataPrice} onChange={(e) => setPriceValue(e)} value={searchPrice.priceValue} placeholder="Gi?? nh??" />
            <Dropdown className="Dropdown mr-3" options={areaSelected} onChange={(e) => setAreaValue(e)} value={searchArea.areaValue}  placeholder="Di???n t??ch" />
            <Button
            onClick={() => confirm()}
            icon="pi pi-search"
            label="Search"
            className="p-mr-2 ml-3"
            ></Button>
            <div className="result-found pt-3">
                <span style={{fontWeight: 'bold'}}>T???ng k???t qu???: {products?.length}</span>
            </div>
        </div>
          <div className="card table-data">
            <DataTable value={products} paginator rows={10} onRowClick={(e) => viewPostDetail(e)}>
                <Column body={imageBodyTemplate} header="Image"></Column>
                <Column field="titleInf" header="Ti??u ?????" sortable></Column>
                <Column field="priceInf" header="Gi??" sortable></Column>
                <Column field="descriptionInf" header="M?? t???" sortable></Column>
                <Column field="areaInf" header="Di??n t??ch" sortable></Column>
                <Column field="addressInf" header="?????a ch???" sortable></Column>
            </DataTable>
            </div>
      </div>
 
  );
}

export default LessorPage;
