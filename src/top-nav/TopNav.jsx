import { Menubar } from 'primereact/menubar';
import { useHistory,withRouter } from "react-router-dom";
import { useEffect } from 'react';

function TopNav() {
  const history = useHistory();

  const items = [
    {
       label: `Gioi thieu`,
       icon:'pi pi-fw pi-file',
       command: (event) => callTopNav(event),
       id: 1,
    },
    {
       label:'Edit',
       icon:'pi pi-fw pi-pencil',
       id: 2,
       command: (event) => callTopNav(event),
    },
    {
       label:'Users',
       icon:'pi pi-fw pi-user',
       id: 3,
       command: (event) => callTopNav(event),
    },
    {
       label:'Events',
       icon:'pi pi-fw pi-calendar',
       id: 4,
       command: (event) => callTopNav(event),
    },
    {
       label:'Quit',
       icon:'pi pi-fw pi-power-off',
       id: 5,
       command: (event) => callTopNav(event),
    }
 ];

const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2 cursor-pointer"  onClick={() => history.push("/home")}></img>;
const callTopNav = (event) => {
   switch (event.item.id) {
      case 1:
         history.push("/home");
         break;
      case 2: 
         history.push("/edit")
         break;
   
      default:
         history.push("/home");
         break;
   }
}

  return (
   <div>
      <div className="top-nav card">
      <Menubar model={items} start={start}/>
      </div>

   </div>
  );
}

export default withRouter(TopNav);
