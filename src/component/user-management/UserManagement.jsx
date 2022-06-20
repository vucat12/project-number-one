import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./UserManagement.scss";
import { Tooltip } from "primereact/tooltip";
import { UserServices } from "../../services/userServices";
import { SellerService } from "../../services/sellerServices";
import { getProvincesVN } from "../home-page/model/provinces";

const userService = UserServices;
const productService = SellerService;
const listProvinces = getProvincesVN();

const UserManagement = () => {
  const [listUsers, setListUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    userService.getAllUsers().then((res) => {
      setListUsers(res);
    });
  };

  const handleViewPost = async () => {
    let data = await productService
      .getPostDetail(
        "https://alonhadat.com.vn/chinh-chu-can-ban-nha-duong-so-16a-kp11-p-binh-hung-hoa-a-quan-binh-tan-hcm-6862518.html"
      )
      .then((res) => res.data[0]);
    history.push("/view-post", { data: data });
  };

  const handleEditUser = (user) => {
    history.push(`/user/${user.id}/edit`, { user: user });
  };

  const renderAction = (rowData) => {
    return (
      <>
        <Tooltip target=".edit-button" mouseTrack mouseTrackLeft={10}></Tooltip>
        <div onClick={() => handleEditUser(rowData)}>
          <i
            className="pi pi-user-edit mr-2 edit-button"
            style={{ fontSize: "1.5em", color: "#6F7BD9", cursor: "pointer" }}
            data-pr-tooltip="Edit User"
            data-pr-position="right"
          ></i>
        </div>

        <Tooltip
          target=".view-suggestion"
          mouseTrack
          mouseTrackLeft={10}
        ></Tooltip>
        <a onClick={() => handleViewPost()}>
          <i
            className="pi pi-eye mr-2 view-suggestion"
            style={{ fontSize: "1.5em", color: "#6F7BD9", cursor: "pointer" }}
            data-pr-tooltip="View Suggestion"
            data-pr-position="right"
          ></i>
        </a>

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

  const renderProvince = (rowData) => {
    const province = listProvinces.find(
      (el) => el.value === rowData.province_info
    );

    console.log(province);

    return province?.label;
  };

  return (
    <div className="user-management">
      <div className="title1 title" tooltip="Enter your username">
        User Management
      </div>
      <div className="card table-data">
        <DataTable value={listUsers} paginator rows={10}>
          <Column body={renderAction} header="Action"></Column>
          <Column field="username" header="Username" sortable></Column>
          <Column field="email" header="Email" sortable></Column>
          <Column field="age" header="Age" sortable></Column>
          <Column field="gender" header="Gender" sortable></Column>
          <Column field="address" header="Address" sortable></Column>
          <Column
            field="province"
            body={renderProvince}
            header="City"
            sortable
          ></Column>
          <Column field="country" header="Country" sortable></Column>
          <Column field="createdAt" header="Created At" sortable></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default UserManagement;
