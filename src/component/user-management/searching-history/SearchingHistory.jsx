import React, { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

// <Column field="title" header="Tiêu đề" sortable></Column>
// <Column field="price" header="Giá" sortable></Column>
// <Column field="description" header="Mô tả" sortable></Column>
// <Column field="area" header="Diện tích" sortable></Column>
// <Column field="address" header="Địa chỉ" sortable></Column>

const data = [
  {
    id: 1,
    title: "Đất nền nhà mặt phố",
    price: 2000,
    description: "Description",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 2,
    title: "Đất nền nhà mặt phố",
    price: 2000,
    description: "Description",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 3,
    title: "Đất nền nhà mặt phố",
    price: 2000,
    description: "Description",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 4,
    title: "Đất nền nhà mặt phố",
    price: 2000,
    description: "Description",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 5,
    title: "Đất nền nhà mặt phố",
    price: 2000,
    description: "Description",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 6,
    title: "Đất nền nhà mặt phố",
    price: 2000,
    description: "Description",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 7,
    title: "Đất nền nhà mặt phố",
    price: 2000,
    description: "Description",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 8,
    title: "Đất nền nhà mặt phố",
    price: 2000,
    description: "Description",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 9,
    title: "Đất nền nhà mặt phố",
    price: 2000,
    description: "Description",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
  {
    id: 10,
    title: "Đất nền nhà mặt phố",
    price: 2000,
    description: "Description",
    area: 2000,
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
  },
];

const SearchingHistory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div className="user-management">
      <div className="title1 title" tooltip="Enter your username">
        Searching History of User (Nguyễn Công Hiếu)
      </div>
      <div className="card table-data">
        <DataTable value={products} paginator rows={10}>
          <Column field="title" header="Tiêu đề" sortable></Column>
          <Column field="price" header="Giá" sortable></Column>
          <Column field="description" header="Mô tả" sortable></Column>
          <Column field="area" header="Diện tích" sortable></Column>
          <Column field="address" header="Địa chỉ" sortable></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default SearchingHistory;
