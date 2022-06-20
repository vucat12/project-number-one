import { useHistory } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import "../UserManagement.scss";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { UserServices } from "../../../services/userServices";

const userService = UserServices;

const EditUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!history.location.state.user) history.push("/user-management");
    setUser(history.location.state.user);
  }, []);

  const handleEditUser = () => {
    console.log(user);
    userService.editUser({ ...user, user_id: user.id }).then((res) => {
      console.log(res);
      if (res.status === 200) history.push("/user-management");
    });
  };

  return (
    <>
      <div className="title">Edit User</div>
      <div className="form-edit-user">
        <InputText
          placeholder="First Name"
          value={user.first_name}
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
        />
        <InputText
          placeholder="Last Name"
          value={user.last_name}
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
        />
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
        <InputText placeholder="CMND" value={user.identity_num} disabled />
        <InputText placeholder="Gender" value={user.gender} disabled />
        <InputText
          placeholder="Address"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
        />
        <InputText placeholder="Country" value={user.country} disabled />
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
