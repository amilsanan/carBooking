import React, { useState, useEffect } from "react";
// import Table from 'react-bootstrap/Table';
import axios from "axios";
import DataTable from "react-data-table-component";

function Booked_cars() {
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
  const [datas, SetDatas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/getbookedCars").then(async (res) => {
      await SetDatas(res.data);
      console.log("====....", datas);
    });
  }, []);
  console.log(datas);
  const columns = [
    {
      name: "userID",
      selector: (row) => row.userId,
    },
    {
      name: "CarId",
      selector: (row) => row.carId,
    },

    {
      name: "image",
      selector: (row) => (
        <img width={50} height={50} src={row.carImage} alt="jk" />
      ),
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

export default Booked_cars;
