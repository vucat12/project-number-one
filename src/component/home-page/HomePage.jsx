import React, {useEffect, useState} from "react";
import { Carousel } from 'primereact/carousel';
import { getProvincesVN } from './model/provinces.js';
import "./HomePage.scss";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Dropdown from 'react-dropdown';
import { getDistricts } from "pc-vn";
import { useHistory } from "react-router";
import { dataType } from "./model/ground.js";
import { areaSelected } from "../init-default/area";

const listProvinces = getProvincesVN();
const listDistrict = getDistricts();
const listTypeGround = dataType;
let products =  [
  {"id": "01","code": "f230fh0g3","name": "Kinh nghiệm mua đất nền dự án: 6 lời khuyên cho nhà đầu tư mới vào thị trường","Cơn sốt nóng bỏng": "Product Description","image": "https://file4.batdongsan.com.vn/crop/354x200/2021/06/09/PHJN6Zw0/20210609161010-e64d.jpg","price": "2 tỷ","category": "Accessories","quantity": 24,"inventoryStatus": "Cơn sốt nóng bỏng","rating": 5},
  {"id": "02","code": "nvklal433","name": "Chi phí thuê đất KCN của Việt Nam tiếp tục leo thang","description": "Product Description","image": "https://file4.batdongsan.com.vn/crop/354x200/2021/06/09/YSUn3oGJ/20210609144742-08c5.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
  {"id": "03","code": "zz21cz3c1","name": "Thông tin tổng quan về Thành phố Thuận An Bình Dương","description": "Product Description","image": "https://file4.batdongsan.com.vn/crop/354x200/2021/06/08/JGcIp0rf/20210608212338-63d7.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
  {"id": "04","code": "244wgerg2","name": "Covid-19 khiến sân vườn, bàn ăn cũng trở thành văn phòng","description": "Product Description","image": "https://file4.batdongsan.com.vn/crop/354x200/2021/06/04/YSUn3oGJ/20210604212150-21ff.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
  {"id": "05","code": "h456wer53","name": "BĐS công nghiệp tiếp tục khởi sắc trong làn sóng Covid lần thứ 4","description": "Product Description","image": "https://file4.batdongsan.com.vn/crop/354x200/2021/06/04/YSUn3oGJ/20210604113941-5141.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
  {"id": "06","code": "av2231fwg","name": "Hưng Yên chấp thuận thành lập Khu công nghiệp Phố Nối A mở rộng 92,5ha","description": "Product Description","image": "https://file4.batdongsan.com.vn/crop/354x200/2021/06/04/zk7ggeWN/20210604143556-4b3b.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
]

function HomePage() {


const [value, setValue] = useState({valueInput: '', valueSelect: ''});
const [valueProvinces, setProvince] = useState('');
const [valueDistrict, setDistrict] = useState('');
const [valueArea, setValueArea] = useState({areaValue: '', idArea: ''});

const [listOptionsDistrict, setOptionsDistrict] = useState('');
const routing = useHistory();


useEffect(() => {
  setDistrict('');
  setOptionsDistrict(listDistrict.filter(el => el.province_value === valueProvinces));
}, [valueProvinces])

  const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

const viewDetail = (e) => {
  routing.push({
    pathname: '/view-post',
    state: { ...e }
});
}

const productTemplate = (product) => {

  return (
      <div className="product-item" onClick={() => viewDetail(product)}>
          <div className="product-item-content">
              <div className="p-mb-3">
                  <img src={product.image} height={200} width={353} alt={product.name} className="product-image" />
              </div>
              <div>
                  <h4 className="p-mb-1 product-item-content__title"><span>{product.id}. </span>{product.name}</h4>
              </div>
          </div>
      </div>
  );
}

const setValueInput = (e) => {
  setValue({...value, valueInput: e.target.value})
}

const setValueSelect = (e) => {
  setValue({...value, valueSelect: e.value})
}

const ValueSearching = () => {
  console.log("======", valueProvinces, valueDistrict)
}

  return (
    <div className="home-page">
      <div className="background-home background-test">
        <div className="search-home">
        <div className="search-home-head ">
                  <Dropdown className="Dropdown" options={listTypeGround} onChange={(e) => setValueSelect(e)} value={value.valueSelect} placeholder="Loại nhà đất" />
                  <InputText className="search-home-input input-noFocus" value={value.valueInput} onChange={(e) => setValueInput(e)} placeholder="Tìm kiếm địa điểm và khu vực" />
                  <Button className="button-noFocus" label="Click" icon="pi pi-search"  
                  iconPos="right" onClick={ValueSearching}/>
        </div>
        <div className="search-home-under mt-2">
        <Dropdown className="Dropdown" options={listProvinces} onChange={(e) => setProvince(e.value)} value={valueProvinces} placeholder="Tỉnh trên toàn quốc" />
        <Dropdown className="Dropdown" options={listOptionsDistrict} onChange={(e) => setDistrict(e.value)} value={valueDistrict} placeholder="Quận/ Huyện" />
        <Dropdown className="Dropdown" options={areaSelected} onChange={(e) => setValueSelect(e)} value={valueArea.areaValue} placeholder="Diện tích" />
        </div>

        </div>
      </div>
      <div className="carousel-demo pr-4 pl-4">
        <div className="card">
            <Carousel responsiveOptions={responsiveOptions} value={products} numVisible={3} numScroll={1} className="custom-carousel" circular
                autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
      </div>

      <div className="achieved">
        <div className="achieved-title text-center mt-4">Dự án tiêu biểu</div>
        <div className="achieved-result p-grid text-center mt-4 p-align-center">
          <div onClick={() => routing.push({pathname: '/view-post'})} className="p-col achieved-result-image highlight-project-one"><span className="text-on-bg" >Tecco Elite City</span></div>
          <div className="p-col achieved-result-image background-test"><span className="text-on-bg">Vinhomes</span></div>
          <div className="p-col achieved-result-image background-test"><span className="text-on-bg">Text in background</span></div>
        </div>
        <div className="achieved-result p-grid text-center mt-4 p-align-center">
          <div className="p-col achieved-result-image background-test"><span className="text-on-bg">Text in background</span></div>
          <div className="p-col achieved-result-image background-test"><span className="text-on-bg">Text in background</span></div>
          <div className="p-col achieved-result-image background-test"><span className="text-on-bg">Text in background</span></div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
