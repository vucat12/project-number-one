import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserManagement.scss";
import { Tooltip } from "primereact/tooltip";
import { UserServices } from "../../services/userServices";

const data = [
  {
    id: 1,
    name: "Nguyễn Công Hiếu",
    email: "nguyenconghieu@gmail.com",
    age: "18",
    gender: "Nam",
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
    createdAt: "2020-01-01",
  },
  {
    id: 2,
    name: "Vũ Cát",
    email: "vucat12@gmail.com",
    age: "18",
    gender: "Nam",
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
    createdAt: "2020-01-01",
  },
  {
    id: 3,
    name: "Nguyễn Hoài Phong",
    email: "nguyenconghieu@gmail.com",
    age: "18",
    gender: "Nam",
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
    createdAt: "2020-01-01",
  },
  {
    id: 4,
    name: "Nguyễn Vũ Khánh",
    email: "nguyenconghieu@gmail.com",
    age: "18",
    gender: "Nam",
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
    createdAt: "2020-01-01",
  },
  {
    id: 5,
    name: "Nguyễn Lê Tấn Khoa",
    email: "nguyenconghieu@gmail.com",
    age: "18",
    gender: "Nam",
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
    createdAt: "2020-01-01",
  },
  {
    id: 6,
    name: "Nguyễn Đức Phúc",
    email: "nguyenconghieu@gmail.com",
    age: "18",
    gender: "Nam",
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
    createdAt: "2020-01-01",
  },
  {
    id: 7,
    name: "Bùi Đoàn Quang Tân",
    email: "nguyenconghieu@gmail.com",
    age: "18",
    gender: "Nam",
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
    createdAt: "2020-01-01",
  },
  {
    id: 8,
    name: "Trần Phú Thoại",
    email: "nguyenconghieu@gmail.com",
    age: "18",
    gender: "Nam",
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
    createdAt: "2020-01-01",
  },
  {
    id: 9,
    name: "Nguyễn Văn Đậu",
    email: "nguyenconghieu@gmail.com",
    age: "18",
    gender: "Nam",
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
    createdAt: "2020-01-01",
  },
  {
    id: 10,
    name: "Nguyễn Đình Hiếu",
    email: "nguyenconghieu@gmail.com",
    age: "18",
    gender: "Nam",
    address: "37 Nguyễn Văn Trỗi, Quận Phú Nhuận",
    city: "Hồ Chí Minh",
    country: "Việt Nam",
    createdAt: "2020-01-01",
  },
];

const userService = UserServices;

const UserManagement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    userService.getAllUserManagement().then((res) => {
      console.log(res);
    });
  };

  const renderAction = (rowData) => {
    return (
      <>
        <Tooltip target=".edit-button" mouseTrack mouseTrackLeft={10}></Tooltip>
        <Link to={`/user/${rowData.id}/edit`}>
          <i
            className="pi pi-user-edit mr-2 edit-button"
            style={{ fontSize: "1.5em", color: "#6F7BD9", cursor: "pointer" }}
            data-pr-tooltip="Edit User"
            data-pr-position="right"
          ></i>
        </Link>

        <Tooltip
          target=".view-suggestion"
          mouseTrack
          mouseTrackLeft={10}
        ></Tooltip>
        <Link to={`/view-post`}>
          <i
            className="pi pi-eye mr-2 view-suggestion"
            style={{ fontSize: "1.5em", color: "#6F7BD9", cursor: "pointer" }}
            data-pr-tooltip="View Suggestion"
            data-pr-position="right"
          ></i>
        </Link>

        <Tooltip
          target=".searching-history"
          mouseTrack
          mouseTrackLeft={10}
        ></Tooltip>
        <Link to={`/user/${rowData.id}/history`}>
          <i
            className="pi pi-search-plus searching-history"
            style={{ fontSize: "1.5em", color: "#6F7BD9", cursor: "pointer" }}
            data-pr-tooltip="Searching History"
            data-pr-position="right"
          ></i>
        </Link>
      </>
    );
  };

  return (
    <div className="user-management">
      <div className="title1 title" tooltip="Enter your username">
        User Management
      </div>
      <div className="card table-data">
        <DataTable value={products} paginator rows={10}>
          <Column body={renderAction} header="Action"></Column>
          <Column field="name" header="Name" sortable></Column>
          <Column field="email" header="Email" sortable></Column>
          <Column field="age" header="Age" sortable></Column>
          <Column field="gender" header="Gender" sortable></Column>
          <Column field="address" header="Address" sortable></Column>
          <Column field="city" header="City" sortable></Column>
          <Column field="country" header="Country" sortable></Column>
          <Column field="createdAt" header="Created At" sortable></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default UserManagement;
