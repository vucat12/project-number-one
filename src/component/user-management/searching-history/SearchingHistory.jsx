import React, { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useHistory } from "react-router-dom";
import { getProvincesVN } from "../../home-page/model/provinces";
import { getDistricts } from "pc-vn";

// <Column field="title" header="Tiêu đề" sortable></Column>
// <Column field="price" header="Giá" sortable></Column>
// <Column field="description" header="Mô tả" sortable></Column>
// <Column field="area" header="Diện tích" sortable></Column>
// <Column field="address" header="Địa chỉ" sortable></Column>
const listProvinces = getProvincesVN();
const listDistrict = getDistricts();

const SearchingHistory = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setProducts(history.location.state.dataSource);
  }, []);

  const renderProvince = (rowData) => {
    const province = listProvinces.find(
      (el) => parseInt(el.value) == parseInt(rowData.province_search)
    );
    return province?.label;
  };

  const renderDistrict = (rowData) => {
    const district = listDistrict.find(
      (el) => parseInt(el.value) == parseInt(rowData.district_search)
    );

    console.log(district, rowData.district_search);

    return district?.label;
  };

  return (
    <div className="user-management">
      <div className="title1 title" tooltip="Enter your username">
        Searching History of User
      </div>
      <div className="card table-data">
        <DataTable value={products} paginator rows={10}>
          <Column
            body={renderProvince}
            field="province_search"
            header="Province"
            sortable
          ></Column>
          <Column
            body={renderDistrict}
            field="district_search"
            header="District"
            sortable
          ></Column>
          <Column field="price_search" header="Giá" sortable></Column>
          <Column field="squad_search" header="Diện tích" sortable></Column>
          <Column field="real_estate_type" header="Loại" sortable></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default SearchingHistory;
