import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './page1.css';
import axios from 'axios';


const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [res, setres] = useState("");
  const [uploaded, setUploaded] = useState(false);


  const handleChange = (event) => {
    setFile(event.target.files[0]);
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
      setUploaded(true); 
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReload = () => {
    setFile(null); // Reset the file state
    setUploaded(false); // Reset the uploaded state
    setres(""); // Clear the previous result
  };
  
  const getMoreInformation = () => {
    if (file && file.name.endsWith('.csv') && file.name.toLowerCase().includes('webattack_bruteforce')) {
      return "A malicious brute-force attack that targets websites by systematically attempting various username/password combinations to gain unauthorized access, exploiting weak security measures.";
    }
    if (file && file.name.endsWith('.csv') && file.name.toLowerCase().includes('ddos (1)')) {
      return "A Distributed Denial of Service (DDoS) attack is a malicious attempt to disrupt the regular functioning of a target system, service, or network by overwhelming it with a flood of internet traffic.SSHpatator is a tool used for brute-forcing SSH credentials by systematically trying various username and password combinations.";
    }
    if (file && file.name.endsWith('.csv') && file.name.toLowerCase().includes('dos_goldeneye')) {
      return "GoldenEye is a type of Denial of Service (DoS) attack tool that targets web servers. It uses HTTP and HTTPS flood attacks, overwhelming the server with a massive number of requests, exhausting its resources and rendering it inaccessible to legitimate users. GoldenEye's purpose is to disrupt the availability of the targeted website or service.";
    }
    if (file && file.name.endsWith('.csv') && file.name.toLowerCase().includes('dos_hulk')) {
      return "HULK (HTTP Unbearable Load King) is a Denial of Service (DoS) attack tool designed to target web servers. It generates a large number of HTTP GET or POST requests to overwhelm the server's resources and render it inaccessible to legitimate users. HULK utilizes multi-threading and randomization techniques to make the attack more effective";
    }
    if (file && file.name.endsWith('.csv') && file.name.toLowerCase().includes('ftp_patator')) {
      return "FTP_patator is a brute-forcing tool used to perform attacks on FTP (File Transfer Protocol) servers. It systematically attempts various username and password combinations to gain unauthorized access to FTP servers. ";
    }
    if (file && file.name.endsWith('.csv') && file.name.toLowerCase().includes('ssh_patator')) {
      return "SSH_patator is a brute-forcing tool used for conducting attacks on SSH (Secure Shell) servers. It is designed to systematically and automatically attempt different username and password combinations to gain unauthorized access to SSH servers.";
    }
    return "";
  };

  return (
    <div className="container">
      {uploaded ? (
        <div className="result-container">
          <p>Result: {res.Prediction}</p>
          <p>Malicious Samples: {res.mali}</p>
          <p>Type of the attack: {res.attack}</p>
          <p>More information: {getMoreInformation()}</p>
          <button className="reloadBtn" onClick={handleReload}>
            Reload
          </button>
        </div>
      ) : (
        <div className="drag-area">
          <div className="icon">
            <FontAwesomeIcon icon={faCloudUploadAlt} />
          </div>
          <header>Drag & Drop to Upload Files</header>
          <span>OR</span>
          <input type="file" id="file-input" onChange={handleChange} />
          <button id="upload-btn" className="uploadBtn" onClick={handleSubmit}>
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
