import { Menubar } from 'primereact/menubar';

function TopNav() {
   

  const items = [
    {
       label:'Gioi thieu',
       icon:'pi pi-fw pi-file',
    },
    {
       label:'Edit',
       icon:'pi pi-fw pi-pencil',
    },
    {
       label:'Users',
       icon:'pi pi-fw pi-user',
    },
    {
       label:'Events',
       icon:'pi pi-fw pi-calendar',
    },
    {
       label:'Quit',
       icon:'pi pi-fw pi-power-off'
    }
 ];
 const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;


  return (
   <div>
      <div  className="card">
      <Menubar  model={items}  start={start}/>
      </div>
   </div>
  );
}

export default TopNav;
