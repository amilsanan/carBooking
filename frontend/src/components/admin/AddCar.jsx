import React, { useState, useEffect } from "react";
import "./AddCar.css";
import axios from 'axios';
// import { useForm } from "react-hook-form";

// import { toast } from 'react-toastify'

// import { useNavigate } from "react-router-dom";

function AddCar() {
  const intialState = {
    name: '',
    brand: '',
    price: '',
    year: '',
    kms: '',
    fuel:'',
    regNo:'',
    image:'',
}
const [com, setCom] = useState([])
useEffect(()=>{
   axios.get(`http://localhost:5000/admin/getCompanies`).then(async(res)=>{
    console.log("456",res.data);
   await setCom(res.data)
  })
},[])


const [preview, setPreview] = useState()
const [signUpData, setSignupData] = useState(intialState)
const [imageCar, setImageCar] = useState("")

const changeImage =async (e) => {
  console.log(com);
  e.preventDefault()
  setSignupData({ ...signUpData, image: e.target.files[0] })
  const file = e.target.files[0]
  console.log('file',file);
  setPreview(URL.createObjectURL(e.target.files[0]))

 
}

const onSubmit = async (e) => {
  console.log('e==signup DAta',signUpData);
    e.preventDefault();
    let cloud = new FormData();
  cloud.append("file",signUpData.image)
  cloud.append("upload_preset", "md8gayt3");
  var { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/ds95de0tj/image/upload`, cloud
  );
  let url = data.secure_url;
  await setImageCar(url)
  console.log(',jgkyugy',url);   

    const formData = new FormData();        
    formData.append("image", url);
    formData.append("name", signUpData.name);
    formData.append("brand", signUpData.brand);
    formData.append("price", signUpData.price);
    formData.append("year", signUpData.year);
    formData.append("kms", signUpData.kms);
    formData.append("fuel", signUpData.fuel);
    formData.append("regNo", signUpData.regNo);
    console.log(signUpData);   
        
    await axios.post("http://localhost:5000/admin/addCars",formData).then((res) => {
     console.log(res) })      
  }  
// }

  return (
    <div className="add_car_container">
      <div className="add_car_wrapper">
        <div className="add_car_header">
          <h1>Add Car</h1>
          <span>
            <i className="ri-close-fill"></i>
          </span>
        </div>
        
          <div className="add_car_input_wrapper">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name" onChange={(e) => setSignupData({ ...signUpData, name: e.target.value })} />            
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">Brand</label>
            <select  name="brand"  onChange={(e) => setSignupData({ ...signUpData, brand: e.target.value })} >
              <optgroup>
              
                <option hidden value="">
                  Select Brand
                </option>
              {com.map((item)=> (              
                <option>{item.name}</option>                
              ))}
              </optgroup>
            </select>           
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">Price</label>
            <input
              type="text"
              name="price" onChange={(e) => setSignupData({ ...signUpData, price: e.target.value })} />            
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">year</label>
            <input
              type="text"
              name="year"  onChange={(e) => setSignupData({ ...signUpData, year: e.target.value })}/>            
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">kms</label>
            <input
              type="text"
              name="kms"  onChange={(e) => setSignupData({ ...signUpData, kms: e.target.value })}/>            
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">Fuel</label>
            <select
              name="fuel"  onChange={(e) => setSignupData({ ...signUpData, fuel: e.target.value })}>
              <optgroup>
                <option hidden value="">
                  Select Fuel Type
                </option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="EV">EV</option>
              </optgroup>
            </select>
           
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">Registration No.</label>
            <input
              type="text"
              name="registrationNo" onChange={(e) => setSignupData({ ...signUpData, regNo: e.target.value })} />
            
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">Image</label>
            <img className="previewImage" src={preview} alt="preview" />
            <input
              type={"file"}
              name="image"
              accept="image/*"
              required  onChange={changeImage} />
          </div>
          <button type="submit" onClick={onSubmit}>Add</button>
        
      </div>
    </div>
  );
}

export default AddCar;
