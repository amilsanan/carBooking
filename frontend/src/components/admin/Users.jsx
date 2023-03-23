import React, { useState, useEffect } from "react";
import axios from 'axios';
import DataTable from 'react-data-table-component';
// import Container from '@material-ui/core/Container';

function Users() {
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  const [datas, SetDatas] = useState([])
  const [info, setInfo] = useState(0)

    const getInformations=async ()=>{
     let  respo = await axios.get("http://localhost:5000/admin/getUsers")
      console.log('eeee',respo);
      await SetDatas(respo.data)
      console.log('lkjhgffdasd',datas);
    }
    //
  useEffect( () => {
     getInformations() 
   
  }, [])


  const handleButtonBlock = async (id)=>{
    console.log('button clicked',id);
    const  respo = await axios.post("http://localhost:5000/admin/block",{id:id}).then(async(res)=>{
      console.log('1223',res);
      
     let  responsee = await axios.get("http://localhost:5000/admin/getUsers")
      console.log('data gfetched',responsee.data);
       SetDatas(responsee.data)
    })
      
  }
  const columns = [
    {
      name: 'Id',
      selector: row => row._id,
    },
    {
      name: 'e-mail',
      selector: row => row.email,
    },
    {
      name: 'Phone',
      selector: row => row.phone,
    },
    {
      name: 'createdAt',
      selector: row => row.createdAt,
    },
    {
      name:'block',
      cell: (row) => <button onClick={()=>handleButtonBlock(row._id)}>{row.isBlocked ? "UnBlock" : "Block"}</button>
      
    },

  ];

  // let data = datas.map((item, index) => {    
  //   return {      
  //     id: 1,
  //     // index:index+1,
  //     _id: item._id,
  //     email: item.email,
  //     phone: item.phone,
  //     createdAt: item.createdAt,
  //     block:item.

  //   }
  // })
  return (
      <DataTable
        title="Car Companies"
        columns={columns}
        data={datas}
        selectableRows
        
        // expandableRowsComponent={ExpandedComponent}
        pagination
      />
  );
}


export default Users;
