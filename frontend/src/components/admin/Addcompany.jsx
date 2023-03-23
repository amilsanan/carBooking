import React, { useState , useRef, useCallback } from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";


function Addcompany() {
  ////////////////////////////////////////////////////////////

  const [preview, setPreview] = useState()
  // const [image, setImage] = useState()   
    const { register, handleSubmit, formState: { errors } } = useForm({
      shouldUnregister: true // set the shouldUnregister option to true
    })
    const handleFileChange = (e) => {
      e.preventDefault()
        const file = e.target.files[0]
        setPreview(URL.createObjectURL(e.target.files[0]))        
    }    
    const formRef = useRef(null);
  const onSubmit = async(datas) => {   
    console.log('datak',datas);   
    
      const cloud = new FormData();
      cloud.append("file", datas.file[0])
      cloud.append("upload_preset", "md8gayt3");
      console.log(cloud);
      var { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/ds95de0tj/image/upload`, cloud
      );
      let url = data.secure_url;
      console.log(url);
      var formData = new FormData();
      formData.append("name", datas.name);
      formData.append("image", url);
      // console.log(formData);
    
        const res = await fetch("http://localhost:5000/admin/addCompanies", {
            method: "POST",
            body: formData,
        }).then((res) => {
          // formData.delete()
          alert('company addded');
        })  
}
//////////////////////////////////////////////////////////////////////////
  return (
 
  <div className="add_car_container">
  <div className="add_car_wrapper">
  <div className="add_car_header"  >
          <h1>Add Company</h1>
          <span>
            <i className="ri-close-fill"></i>
          </span>
        </div>
    <form onSubmit={ handleSubmit(onSubmit)} className='add_car_form_wrapper' ref={formRef}>
      <div className='add_car_input_wrapper'>
        <label htmlFor="">Name</label>
        <input type="text" name="name" {...register('name', { required: 'Please enter name' })} />
        {errors.name && <p className='errorMessage'>{errors.name?.message}</p>}
      </div>
      <div className='add_car_input_wrapper'>
        <label htmlFor="">Image</label>
        <img className='previewImage' src={preview} alt="preview" />
        <input type='file' name="image" {...register("file")} onChange={handleFileChange} />
      </div>
      <button type='submit'>Add</button>
    </form>
  </div>;</div>)
}

export default Addcompany;
