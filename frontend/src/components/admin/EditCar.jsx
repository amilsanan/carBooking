import React, { useState, useEffect } from "react";
import "./AddCar.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';


function EditCar() {
    const [datas,SetDatas]=useState({})
    const { id } = useParams();
    console.log("456",id);
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/admin/getSingleCar/${id}`).then(async(res)=>{
             await SetDatas(res.data)
             console.log(',jhgjtdhtgf',res.data);  
             setPreview(res.data.imagename)
                   
       })
   },[])

    let [preview, setPreview] = useState()
    const [imageCar, setImageCar] = useState("")
    
    const changeImage =async (e) => {
        
      e.preventDefault()
      console.log("data",datas);
     
      const file = e.target.files[0]
      setPreview(URL.createObjectURL(e.target.files[0]))    
      const cloud = new FormData();
      cloud.append("file",e.target.files[0])
      cloud.append("upload_preset", "md8gayt3");
      var { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/ds95de0tj/image/upload`, cloud
      );
      let url = data.secure_url;
      setImageCar(url)
      console.log(url);
      SetDatas({ ...datas, imagename: url })
    }
    
    const onSubmit = async (e) => {        
        e.preventDefault();
        console.log(datas);
        // const formData = new FormData();            
        // formData.append("image", imageCar);
        // formData.append("name", signUpData.name);
        // formData.append("brand", signUpData.brand);
        // formData.append("price", signUpData.price);
        // formData.append("year", signUpData.year);
        // formData.append("kms", signUpData.kms);
        // formData.append("fuel", signUpData.fuel);
        // formData.append("regNo", signUpData.regNo);
        // console.log(signUpData);   
            
        await axios.post("http://localhost:5000/admin/updateCars",datas).then((res) => {
         console.log(res) })      
      }  
    
  return <div className="add_car_container">
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
          name="name" value={datas.name} onChange={(e) => SetDatas({ ...datas, name: e.target.value })} />            
      </div>
      <div className="add_car_input_wrapper">
        <label htmlFor="">Brand</label>
        <select  name="brand" value={datas.brand} onChange={(e) => SetDatas({ ...datas, brand: e.target.value })} >
          <optgroup>
            <option hidden value="">
              Select Brand
            </option>
            <option value="Rolls Roys">Rolls Roys</option>
            <option value="BMW">BMW</option>
            <option value="Benz">Benz</option>
          </optgroup>
        </select>           
      </div>
      <div className="add_car_input_wrapper">
        <label htmlFor="">Price</label>
        <input
          type="text"
          name="price" value={datas.price} onChange={(e) => SetDatas({ ...datas, price: e.target.value })} />            
      </div>
      <div className="add_car_input_wrapper">
        <label htmlFor="">year</label>
        <input
          type="text"
          name="year" value={datas.year} onChange={(e) => SetDatas({ ...datas, year: e.target.value })}/>            
      </div>
      <div className="add_car_input_wrapper">
        <label htmlFor="">kms</label>
        <input
          type="text"
          name="kms" value={datas.kms} onChange={(e) => SetDatas({ ...datas, kms: e.target.value })}/>            
      </div>
      <div className="add_car_input_wrapper">
        <label htmlFor="">Fuel</label>
        <select
          name="fuel" value={datas.fuel}  onChange={(e) => SetDatas({ ...datas, fuel: e.target.value })}>
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
          name="registrationNo" value={datas.regNo} onChange={(e) => SetDatas({ ...datas, regNo: e.target.value })} />
        
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
}

export default EditCar;
