import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseCreateForm from "../../../components/forms/CourseCreateForm";

import Resizer from "react-image-file-resizer";
import axios from "axios";

const CourseCreate = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    uploading: false,
    paid: true,
    price: "0",
    loading: false,

  });
    const[image, setImage]=useState("");
  const [preview, setPreview]=useState('');
  const [uploadButtonText, setUploadButtonText]=useState('');
   
  
  const handleImage =(e)=>
   {
    
    let file =e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
         

   Resizer.default.imageFileResizer(file,720,500,"JPEG",100,0,async(uri)=>
   {
    try{
    
            let {data}=await axios.post('/api/course/upload-image',{
                     image: uri,
            });
            console.log("IMAGE UPLOADED",data);

    }
    catch(err)
    {
      console.log(err);
      
    }

   })
   };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    // Add your logic to send the data to the server using axios
  };

  
  return (
    <div className="container mt-4">
      <h1 className="jumbotron text-center">Create Course</h1>
      <CourseCreateForm
      handleChange={handleChange}
      handleImage={handleImage}
      handleSubmit={handleSubmit}
      values={values}
      setValues={setValues}
      preview={preview}
      
      />
      <pre>
      {JSON.stringify(values,null,4)}
      </pre>
    </div>
  );
};

export default CourseCreate;
