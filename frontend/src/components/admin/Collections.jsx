import React,{useState,useEffect} from "react";
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Navigate, useNavigate } from 'react-router-dom'
// import Container from '@material-ui/core/Container';

function Collections() {
      const navigate = useNavigate();
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  const [datas,SetDatas]=useState([])
  useEffect(()=>{
         axios.get("http://localhost:5000/admin/getCars").then(async(res)=>{
              await SetDatas(res.data)
             console.log('====....',datas);
        })
    },[])
    const handleButtonEdit = async (id)=>{
    console.log('button clicked',id);
    navigate(`/admin/editCar/${id}`)   
      
  }
    const handleButtonDelete = async (id)=>{
    console.log('button clicked',id);
    axios.post("http://localhost:5000/admin/deleteCars",{id:id}).then((res)=>{        
       console.log('====....',res);
       axios.get("http://localhost:5000/admin/getCars").then(async(res)=>{
        await SetDatas(res.data)
       console.log('====...>>.',datas);
        })
    })
      
  }
    
const columns = [
    {
        name: 'id',
        selector: row => row._id,
    },
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Brand',
        selector: row => row.brand,
    },
    {
        name: 'Price',
        selector: row => row.price,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
    {
        name: 'Kms',
        selector: row => row.kms,
    },
    {
        name: 'Fuel',
        selector: row => row.fuel,
    },
    {
        name: 'Registration Number',
        selector: row => row.regNo,
    },
    
    {
        name: 'image',
        selector: row =><img width={70} height={50} src={row.imagename}  alt="jk" />
    },
    {
      name:'edit',
      cell: (row) => <div><button onClick={()=>handleButtonEdit(row._id)}>Edit</button>
      <button onClick={()=>handleButtonDelete(row._id)}>Delete</button></div>
      
    }, 
    
];

// const data =datas.map((item,index)=>{
//     console.log('kljhgd',item.imagename,);
//     const t ='/images/company/'+item.imagename
//   return  {
//         id: item._id,
//         name: item.name,
//         brand: item.brand,
//         price: item.price,
//         year: item.year,
//         kms: item.kms,
//         fuel: item.fuel,
//         regNo: item.regNo,               
//         image:t
//     }
// }) 
  return (
    
    <DataTable
        title="Car Collections"
        columns={columns}
        data={datas}
        selectableRows
        expandableRowsComponent={ExpandedComponent}
        pagination
    />
);
}

export default Collections;
