import React, { useState } from 'react';
import './pagee.css';
import axios from 'axios';
import img from "./ok1.webp";



const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [res, setres] = useState("");
  
    const handleChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const downloadfile = () => {
      const downloadFile = (fileUrl, fileName) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.click();
      };
      downloadFile(process.env.PUBLIC_URL +"../../collectlogs (2).zip", 'collectlogs.zip');
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await axios.post('http://127.0.0.1:8000/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          mode: 'no-cors'
        });
        setres(response.data);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };

    
    
    return (
      
      <div>
        {/*<img src={img} alt=""/>*/}
        <nav>
          <div class="logo">
            <p>Attack</p>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="new">Scan</a></li>
            <li><a href="neww">Information</a></li>
          </ul>
        </nav>
        <div class="content-items">
        {/*<img src={img} alt=""/>*/}
        <section class="home" id="home">
      <div class="home-content">
        <h1>Zero-Day-Attack</h1>
        <p>
          
A zero-day attack is a cyber attack that exploits a software vulnerability unknown to the developer, making it difficult to defend against as there is no patch or defense available
        </p>
        <p>Collect Network Logs <a href="#" onClick={downloadfile}>here</a></p>
        <div class="btn-box">
          <a href="new" class="btn">Scan</a>
          <a href="neww" class="btn">Information</a>
        </div>
        </div>
        </section>
        </div>
      
        </div>
      
    );
  };
  
export default FileUpload;
