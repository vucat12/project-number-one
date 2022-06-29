import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./UserManagement.scss";
import { Tooltip } from "primereact/tooltip";
import { UserServices } from "../../services/userServices";
import { getProvincesVN } from "../home-page/model/provinces";
import { RecommendPostService } from "../../services/recommendPostServices";
import { getDistricts } from "pc-vn";
import moment from "moment";
import { LogSearchService } from "../../services/logSearchServices";
import { informationUser } from "../../services/authenServices";

const userService = UserServices;
const recommendPostService = RecommendPostService;
const logSearchService = LogSearchService;

const listProvinces = getProvincesVN();
const listDistrict = getDistricts();

const UserManagement = () => {
  const [listUsers, setListUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    const userRole = informationUser().user.username;

    const isAdmin = userRole === "admin" ? true : false;

    userService.getAllUsers(isAdmin).then((res) => {
      setListUsers(res);
    });
  };

  const handleViewPost = async (user, type) => {
    recommendPostService.getRecommendPost(user.id, type).then((res) => {
      const province = listProvinces.find(
        (el) => parseInt(el.value) == parseInt(res.province)
      );
      const district = listDistrict.find(
        (el) => parseInt(el.value) == parseInt(res.district)
      );
      const dataSearch = {
        province: province?.label,
        district: district?.label,
        area: res?.squad,
        price: res?.price,
      };
      if (type === 1)
        history.push({
          pathname: "/seller-page",
          state: { ...dataSearch },
        });
      if (type === 2)
        history.push({
          pathname: "/lessor-page",
          state: { ...dataSearch },
        });
    });
  };

  const handleEditUser = (user) => {
    history.push(`/user/${user.id}/edit`, { user: user });
  };

  const handleSearchingHistory = (user) => {
    logSearchService.getLogSearch(user.id).then((res) => {
      history.push(`/user/${user.id}/history`, { dataSource: res });
    });
  };

  const renderAction = (rowData) => {
    return (
      <>
        <Tooltip target=".edit-button" mouseTrack mouseTrackLeft={10}></Tooltip>
        <span onClick={() => handleEditUser(rowData)}>
          <i
            className="pi pi-user-edit mr-2 edit-button"
            style={{ fontSize: "1.5em", color: "#6F7BD9", cursor: "pointer" }}
            data-pr-tooltip="Sửa thông tin người dùng"
            data-pr-position="right"
          ></i>
        </span>

        <Tooltip
          target=".view-suggestion"
          mouseTrack
          mouseTrackLeft={10}
        ></Tooltip>
        <span onClick={() => handleViewPost(rowData, 1)}>
          <i
            className="pi pi-eye mr-2 view-suggestion"
            style={{ fontSize: "1.5em", color: "#6F7BD9", cursor: "pointer" }}
            data-pr-tooltip="Xem gợi ý cần bán"
            data-pr-position="right"
          ></i>
        </span>
        <Tooltip
          target=".view-suggestion"
          mouseTrack
          mouseTrackLeft={10}
        ></Tooltip>
        <span onClick={() => handleViewPost(rowData, 2)}>
          <i
            className="pi pi-bookmark mr-2 view-suggestion"
            style={{ fontSize: "1.5em", color: "#6F7BD9", cursor: "pointer" }}
            data-pr-tooltip="Xem gợi ý cho thuê"
            data-pr-position="right"
          ></i>
        </span>
        <Tooltip
          target=".searching-history"
          mouseTrack
          mouseTrackLeft={10}
        ></Tooltip>
        <span onClick={() => handleSearchingHistory(rowData)}>
          <i
            className="pi pi-search-plus searching-history"
            style={{ fontSize: "1.5em", color: "#6F7BD9", cursor: "pointer" }}
            data-pr-tooltip="Xem lịch sử tìm kiếm"
            data-pr-position="right"
          ></i>
        </span>
      </>
    );
  };

  const renderProvince = (rowData) => {
    const province = listProvinces.find(
      (el) => el.value == rowData.province_info
    );
    return province?.label;
  };

  const renderDistrict = (rowData) => {
    const district = listDistrict.find(
      (el) => el.value == rowData.district_info
    );

    return district?.label;
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
          <Column field="gender" header="Gender" sortable></Column>
          <Column field="address" header="Address" sortable></Column>
          <Column
            field="mobile_number"
            header="Mobile Number"
            sortable
          ></Column>
          <Column
            field="province"
            body={renderProvince}
            header="City"
            sortable
          ></Column>
          <Column
            field="district"
            body={renderDistrict}
            header="District"
            sortable
          ></Column>
          <Column
            body={(rowData) => moment(rowData.created_at).format("DD/MM/YYYY")}
            field="created_at"
            header="Created At"
            sortable
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default UserManagement;
