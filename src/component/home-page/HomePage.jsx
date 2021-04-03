import React, {useEffect} from "react";
import { Carousel } from 'primereact/carousel';
import { Dropdown } from 'primereact/dropdown';
import { getProvincesVN } from './model/provinces.js';
import "./HomePage.scss";

function HomePage() {
  const valueProvinces = getProvincesVN();
  
  useEffect(() => {

  });
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

  let products =  [
    {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
    {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
    {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
    {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
    {"id": "1004","code": "h456wer53","name": "Bracelet","description": "Product Description","image": "bracelet.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
    {"id": "1005","code": "av2231fwg","name": "Brown Purse","description": "Product Description","image": "brown-purse.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
    {"id": "1006","code": "bib36pfvm","name": "Chakra Bracelet","description": "Product Description","image": "chakra-bracelet.jpg","price": 32,"category": "Accessories","quantity": 5,"inventoryStatus": "LOWSTOCK","rating": 3},
    {"id": "1007","code": "mbvjkgip5","name": "Galaxy Earrings","description": "Product Description","image": "galaxy-earrings.jpg","price": 34,"category": "Accessories","quantity": 23,"inventoryStatus": "INSTOCK","rating": 5},
    {"id": "1008","code": "vbb124btr","name": "Game Controller","description": "Product Description","image": "game-controller.jpg","price": 99,"category": "Electronics","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 4},
    {"id": "1009","code": "cm230f032","name": "Gaming Set","description": "Product Description","image": "gaming-set.jpg","price": 299,"category": "Electronics","quantity": 63,"inventoryStatus": "INSTOCK","rating": 3}
]

const productTemplate = (product) => {
  return (
      <div className="product-item">
          <div className="product-item-content">
              <div className="p-mb-3">
                  <img src={`showcase/demo/images/product/${product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
              </div>
              <div>
                  <h4 className="p-mb-1">{product.name}</h4>
                  <h6 className="p-mt-0 p-mb-3">${product.price}</h6>
                  <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span>
              </div>
          </div>
      </div>
  );
}

  return (
    <div className="home-page">
      <div className="background-home background-test">
        <div className="search-home">
        </div>
      </div>
      <div className="carousel-demo pr-4 pl-4">
        <div className="card">
            <Carousel value={products} numVisible={4} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                autoplayInterval={3000} itemTemplate={productTemplate}  />
        </div>
      </div>

      <div className="achieved">
        <div className="achieved-title text-center mt-4">Du an tieu bieu</div>
        <div className="achieved-result p-grid text-center mt-4 p-align-center">
          <div className="p-col achieved-result-image background-test"><span className="text-on-bg">Text in background</span></div>
          <div className="p-col achieved-result-image background-test"><span className="text-on-bg">Text in background</span></div>
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
