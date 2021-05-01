import { Menubar } from 'primereact/menubar';
import { useHistory,withRouter } from "react-router-dom";
function TopNav() {
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
       label:'Sự kiện',
       icon:'pi pi-fw pi-calendar',
       id: 4,
       command: (event) => callTopNav(event),
    },
    {
       label:'Thông tin biểu đồ',
       icon:'pi pi-fw pi-chart-bar',
       id: 5,
       command: (event) => callTopNav(event),
    }
 ];

 const start = <div className="logo pl-4 pr-4 cursor-pointer"  onClick={() => history.push("/home")}></div>
// const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2 cursor-pointer"  onClick={() => history.push("/home")}></img>;
const end = <div > <i className="pi pi-fw pi-sign-in"></i> <span className="pr-4 cursor-pointer pl-1" onClick={() => history.push("/login")}>Đăng nhập | Đăng ký</span> </div>;
const callTopNav = (event) => {
   switch (event.item.id) {
      case 1:
         history.push("/home");
         break;
      case 2: 
         history.push("/edit");
         break;
      case 5: 
         history.push("/view");
         break;
      
      case 8: 
         history.push("/login");
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
