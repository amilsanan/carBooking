import React, { useState, useEffect } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Addcompany from "./Addcompany";
import AddCar from "./AddCar";
import Users from "./Users";
import Collections from "./Collections";
import Booked_cars from "./Booked_cars";
import Chat from "./Chat";
import CompanyCollections from "./CompanyCollections";


function AdminNavBar() {
  const navigate = useNavigate();

  const [state, setState] = useState("");
  const [component, setComponent] = useState(<Dashboard />);


  useEffect(() => {

    if (state === "dashboard") {
      setComponent(<Dashboard />);
    } else if (state === "addCompany") {
      setComponent(<Addcompany />);
    } else if (state === "addCar") {
      setComponent(<AddCar />);
    } else if (state === "users") {
      setComponent(<Users />);
    } else if (state === "collections") {
      setComponent(<Collections />);
    } else if (state === "booked") {
      setComponent(<Booked_cars />);
    } else if (state === "chat") {
      setComponent(<Chat />);
    } else if (state === "companyCollections") {
      setComponent(<CompanyCollections />);
    }
  }, [state]);

  return (
    <div>
    
      <nav className="NavBar">
      <h1 className="NavBar-title">Admin Panel</h1>
      
    </nav>
    <nav className="NavBar2">
      
      <ul className="NavBar-list2">
        <li className="NavBar-item2">
          <button onClick={()=>setState('dashboard')}>Dashboard</button>
        </li>
        <li className="NavBar-item2">
          <button onClick={()=>setState('users')}>Users</button>
        </li>
        <li className="NavBar-item2">
          <button onClick={()=>setState('collections')}> Show Collections</button>
        </li>
        <li className="NavBar-item2">
          <button onClick={()=>setState('companyCollections')}>Show companies</button>
        </li>
        <li className="NavBar-item2">
          <button onClick={()=>setState('addCompany')}>Add company</button>
        </li>
        <li className="NavBar-item2">
         <button onClick={()=>setState('addCar')} >Add cars</button>
        </li>
        <li className="NavBar-item2">
         <button onClick={()=>setState('booked')} >Booked cars</button>
        </li>
        <li className="NavBar-item2">
         <button onClick={()=>setState('chat')} >Chat</button>
        </li>
      </ul>
    </nav>
    {component}
     
    </div>
  );
}

export default AdminNavBar;
