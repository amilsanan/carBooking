import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

// import Container from '@material-ui/core/Container';
// import ass from  '/images/company/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg'

function CompanyCollections() {
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  const [datas, SetDatas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/admin/getCompanies").then(async (res) => {
      await SetDatas(res.data);
      console.log("====....", datas);
    });
  }, []);
  const handleButtonDelete = async (id)=>{
    console.log('button clicked',id);
    axios.post("http://localhost:5000/admin/deleteCompany",{id:id}).then((res)=>{        
       console.log('====....',res);
       axios.get("http://localhost:5000/admin/getCompanies").then(async(res)=>{
        await SetDatas(res.data)
       console.log('====...>>.',datas);
        })
    })
      
  }
  const columns = [
    {
      name: "Title",
      selector: (row) => row.name,
    },

    {
      name: "image",
      selector: (row) => (
        <img width={50} height={50} src={row.imagename} alt="jk" />
      ),
    },
    {
        name:'edit',
        cell: (row) => <div>
        <button onClick={()=>handleButtonDelete(row._id)}>Delete</button></div>
        
      }, 
  ];

//   const data = datas.map((item, index) => {
//     // const t = "/images/company/" + item.imagename;
//     return {
//       id: 1,
//       title: item.name,
//       image: item.imagename,
//     };
//   });

  return (
    <DataTable
      title="Car Companies"
      columns={columns}
      data={datas}
      selectableRows
      expandableRowsComponent={ExpandedComponent}
      pagination
    />
  );
}

export default CompanyCollections;
