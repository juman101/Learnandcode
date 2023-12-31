import axios from "axios";
import { useState,useEffect } from "react";

import {Select} from 'antd';

const Coursecreate = () => {

  const[values,setValues]=useState({
name: '',
description: '',
uploading: false,
paid :true,
loading : false,
imagePreview: ''
  })

  const handleChange=e=>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  const handleImage=e=>{
   
  }
  const handleSubmit=e=>{
      e.preventDefault();
  console.log(values);
  }


  const courseCreateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </div>
       
      <div className="form-group">
        <textarea 
        name = "description"
        cols ="7"
        rows ="7"
        value ={values.description}
        className="form-control"
        onChange={handleChange}
        ></textarea>
      </div>
      
      

        
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );




  return (
    <div>
      <h1 className="jumbotron text-center square"> 
      Create Course</h1>
      {courseCreateForm()}
    </div>
  )
}

export default Coursecreate
