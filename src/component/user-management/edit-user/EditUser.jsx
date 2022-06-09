import { useHistory } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import '../UserManagement.scss';
import { Button } from "primereact/button";

const EditUser = () => {
  const history = useHistory();

  return (
    <>
      <div className='title'>Edit User</div>
      <div className='form-edit-user'>
        <InputText placeholder='Name'/>
        <InputText placeholder='Email'/>
        <InputText placeholder='Age'/>
        <InputText placeholder='Gender'/>
        <InputText placeholder='City'/>
        <InputText placeholder='Country'/>
        <div className='mt-2' style={{textAlign: 'right'}}>
          <Button
          onClick={() => history.push("/user-management")}
          label="Cancel"
          className="p-button-sm mr-2" 
          style={{  backgroundColor: 'var(--bluegray-800)'}} 
          ></Button>
          <Button
          label="Submit"
          className="p-button-sm mr-2"
          ></Button>
        </div>
      </div>
    </>
  )
}

export default EditUser