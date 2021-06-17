import { Menubar } from 'primereact/menubar';
import { useHistory,withRouter } from "react-router-dom";
import { informationUser } from '../services/authenServices';
import './TopNav.scss'
import { Button } from 'primereact/button';

function TopNav() {

  const user = informationUser();
  const history = useHistory();

  const items = [
    {
       label: `Giới thiệu`,
       icon:'pi pi-fw pi-home',
       command: (event) => callTopNav(event),
       id: 1,
    },
    {
       label:'Tin tức',
       icon:'pi pi-fw pi-folder',
       id: 2,
       command: (event) => callTopNav(event),
    },
    {
       label:'Dự án',
       icon:'pi pi-fw pi-flag',
       id: 3,
       command: (event) => callTopNav(event),
    },
    {
       label:'Thông tin biểu đồ',
       icon:'pi pi-fw pi-chart-bar',
       id: 4,
       command: (event) => callTopNav(event),
    },
    {
       label:'Thông tin nhà đất',
       icon:'pi pi-fw pi-chart-bar',
       items: [
         {
            label:'Nhà đất cần bán',
            icon:'pi pi-fw pi-sort-alt',
            id: 5,
            command: (event) => callTopNav(event),
         },
         {
            label:'Nhà đất cần mua',
            icon:'pi pi-fw pi-sitemap',
            id: 6,
            command: (event) => callTopNav(event),
         },
         {
            label:'Nhà đất cho thuê',
            icon:'pi pi-fw pi-window-maximize',
            id: 7,
            command: (event) => callTopNav(event),
         },
         {
            label:'Nhà đất cần thuê',
            icon:'pi pi-fw pi-slack',
            id: 8,
            command: (event) => callTopNav(event),
         },
       ]
    }
 ];

 const logOut = () => {
   localStorage.removeItem('token_authen');
   history.push('/login'); 
 }

 const end = () =>  {
   if(!user) {
      return (<div><i className="pi pi-fw pi-sign-in"></i> <span className="pr-4 cursor-pointer pl-1" onClick={() => history.push("/login")}>Đăng nhập | Đăng ký</span> </div>)
   }
   else {
      return (
      <div>
         <div className="infor-user">
            <span className="pr-2">Username: {user.user.username}</span>
            <span className="pr-2">Email: {user.user.email}</span>
         </div>
         <Button onClick={() => logOut()}>Log out</Button>
      </div>
      )}
   
   }

 const start = <div className="logo pl-4 pr-4 cursor-pointer mr-4"  onClick={() => history.push("/home")}></div>
const callTopNav = (event) => {
   switch (event.item.id) {
      case 1:
         history.push("/home");
         break;
      case 2: 
         history.push("/edit");
         break;
      case 5: 
         history.push("/seller-page");
         break;
      case 6:
         history.push("/buyer-page");
         break;
      case 7:
         history.push("/lessor-page");
         break;
      case 8: 
         history.push("/tenant-page");
         break;
      case 9: 
         history.push("/sign-up");
         break;

      default:
         history.push("/home");
         break;
   }
}

  return (
   <div className="top-nav">
      <div className=" card">
         <Menubar model={items} start={start} end={end} />
      </div>

   </div>
  );
}

export default withRouter(TopNav);
