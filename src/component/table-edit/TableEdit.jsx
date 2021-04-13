import React, {useState, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
import {dataJson} from './model/dataModel';
import { Button } from 'primereact/button';

function TableEdit() {

    const loopArray = (array) => {
        let result = [];
        array.forEach(element => {
            result?.push(itemTemplate(element))
        });
        return result;  
    }

    const categoryCollection = (item) =>{
        let categories = [];
            item.categoriesCollection.items?.forEach(el => {
                categories?.push(<div style={{margin: '10px'}}>
                    <img src={el.avatarUrl?.url} width="100" height="100" alt={el.avatarUrl?.url} />
                    <div>
                        <div style={{margin: '5px'}}>Title: {el.avatarUrl?.title}</div>
                        <div style={{margin: '5px'}}>Display Name: {el?.displayName}</div>
                    </div>
            </div>)
            })
            return categories;
    }

    const lastArray  = (item) => {
        let services = [];
        let skills = []
        item.servicesCollection.items?.forEach(el => {
            services?.push(<div style={{margin: '5px'}}>Name: {el?.name}</div>)
        })
        item.skillsCollection.items?.array?.forEach(el => {
            skills?.push(<div style={{margin: '5px'}}>Display Name: {el?.displayName}</div>)
        });
        return services;
    } 

    const itemTemplate = (item) => {
        return (
<div className="p-grid" style={{margin: '10px', border: '2px solid #CCCCCC'}}>
    <div className="p-col-3">  
        <img src={item.avatarUrl?.url} width="100%" alt={item.avatarUrl?.url} />
    </div>
    <div className="p-col-3">
        <div style={{margin: '5px'}}>Title: {item.avatarUrl?.title}</div>
        <div style={{margin: '5px'}}>Display Name: {item?.displayName}</div>
        <div style={{margin: '5px'}}>Email: {item?.email}</div>
        <div style={{margin: '5px'}}>Phone: {item?.phone}</div>
        <div style={{margin: '5px'}}>Id: {item.sys?.id}</div>
        <div style={{margin: '5px'}}>Publised At: {item.sys?.publised}</div>
    </div>
    <div className="p-col-3">
        {categoryCollection(item)}
    </div>
    <div className="p-col-3">{lastArray(item)} </div>
</div>
        );
    }

    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [dataSearch, setData] = useState(dataJson.data.advisorProfileCollection.items);

    const valueResult = () => {
        let init = dataJson.data.advisorProfileCollection.items;

        let dataName = init.filter(el => el.displayName.includes(name?.trim()))

        init.forEach(el =>{
            dataName = init.filter(el => category !== (el.categoriesCollection.items[0] &&  el.categoriesCollection.items[1]))
        })

        console.log("=value=", name, category)
console.log("============", dataName)
        setData(dataName);

    }

  return (
    <div>
        <div>
        <span style={{margin: '20px 50px', display: 'inline-block'}} className="p-float-label">
            <InputText value={name} style={{width: '300px'}} id="name" onChange={(e) => setName(e.target.value)} />

            {/* <InputText id="in" value={value} onChange={(e) => setValue(e.target.value)} /> */}
            <label htmlFor="name">Name</label>
        </span>
        <span style={{margin: '20px', display: 'inline-block'}} className="p-float-label">
            <InputText value={category} style={{width: '300px'}} id="category" onChange={(e) => setCategory(e.target.value)}/>
            <label htmlFor="category">Category</label>
        </span>
        <div style={{display: 'inline-block', transform: 'translate(20px, 10px)'}}>
        <Button label="Search" onClick={() => valueResult()}/>
        </div>
        </div>
        {loopArray(dataSearch)}
    </div>
  );
}

export default TableEdit;
