import { useHistory } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import "../UserManagement.scss";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { UserServices } from "../../../services/userServices";
import Dropdown from "react-dropdown";
import { getProvincesVN } from "../../home-page/model/provinces";
import { getDistricts } from "pc-vn";
import "./EditUser.scss";

const userService = UserServices;
const listProvinces = getProvincesVN();
const listDistrict = getDistricts();

const EditUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [listOptionsDistrict, setOptionsDistrict] = useState("");

  useEffect(() => {
    const user = history.location.state.user;

    if (!user) history.push("/user-management");
    setUser(user);
    setOptionsDistrict(
      listDistrict.filter((el) => el.province_value === user.province_info)
    );
  }, []);

  const handleEditUser = () => {
    userService.editUser({ ...user, user_id: user.id }).then((res) => {
      if (res.status === 200) history.push("/user-management");
    });
  };

  const handleChangeProvince = (e) => {
    setOptionsDistrict(
      listDistrict.filter((el) => el.province_name === e.label)
    );
    setUser({ ...user, province_info: e.value, district_info: "" });
  };

  return (
    <>
      <div className="title">Edit User</div>
      <div className="form-edit-user">
        <InputText
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <InputText
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <InputText
          placeholder="Date of Birth"
          value={user.date_of_birth}
          disabled
        />
        <InputText
          placeholder="Mobile Number"
          value={user.mobile_number}
          onChange={(e) => setUser({ ...user, mobile_number: e.target.value })}
        />
        <div style={{ display: "flex" }}>
          <Dropdown
            className="Dropdown Dropdown-provinces mr-3"
            options={listProvinces}
            onChange={(e) => handleChangeProvince(e)}
            value={user.province_info}
            placeholder="Tỉnh"
          />
          <Dropdown
            className="Dropdown"
            options={listOptionsDistrict}
            onChange={(e) => setUser({ ...user, district_info: e.value })}
            value={user.district_info}
            placeholder="Quận/ Huyện"
            disabled={user.province_info === "" ? true : false}
          />
        </div>
        <InputText placeholder="CMND" value={user.identity_num} disabled />
        <InputText
          placeholder="Gender"
          value={user.gender}
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
        />
        <InputText
          placeholder="Address"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
        />
        <div className="mt-2" style={{ textAlign: "right" }}>
          <Button
            onClick={() => history.push("/user-management")}
            label="Cancel"
            className="p-button-sm mr-2"
            style={{ backgroundColor: "var(--bluegray-800)" }}
          ></Button>
          <Button
            label="Submit"
            className="p-button-sm"
            onClick={() => handleEditUser()}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default EditUser;
