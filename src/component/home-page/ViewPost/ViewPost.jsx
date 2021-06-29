import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import './ViewPost.scss';
import { Carousel } from 'primereact/carousel';

function ViewPost() {
  const location = useLocation();
  const [data, setData] = useState({});

  const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '600px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
    }
];

const productTemplate = (product) => {
  return (
      <div className="product-item">
          <div className="product-item-content">
            <img src={product} alt="Hình ảnh" className="product-image"  />
          </div>
      </div>
      
  );
}

  useEffect(() => {
    setData(location.state.data);
  }, [location]);

  return (
      <div className="view-detail">
        <div className="view-detail-title">
          {data.titleInf}
        </div>
        <div className="view-detail-date">
          {data.dateInf}
        </div>
        <div className="view-detail-content pb-2">
          <span className="achieved-title view-detail-content__title">Diện tích: </span>{data.areaInf}
        </div>
        <div className="view-detail-content pb-2">
          <span className="achieved-title view-detail-content__title">Giá: </span>{data.priceInf}
        </div>
        <div className="view-detail-highlight pb-2">
          <span className="achieved-title view-detail-content__title">Địa chỉ: </span>{data.addressInf}
        </div>
        <div className="view-detail-content" dangerouslySetInnerHTML={{__html: data.contentInf?.replaceAll('\n', '<br/>')}}>
        </div>

        <div className="card view-detail-carousel">
          <Carousel value={data?.imageInf} numVisible={2} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
           autoplayInterval={3000} itemTemplate={productTemplate} header={<h3>Hình ảnh chi tiết</h3>} />
        </div>
        <div className="view-detail-image mb-4">
          <span className="view-detail-image_description"><em>Hình ảnh mô tả</em></span>
        </div>
      </div>
  );
}

export default ViewPost;
