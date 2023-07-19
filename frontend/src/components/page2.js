import React, { useState } from 'react';
import './page2.css';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [res, setres] = useState("");
  
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
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div class="containerShiva">
    <h1>ABSTRACT</h1>
    <p>Welcome to our website! Our primary focus is on zero-day attack detection, a critical aspect of cybersecurity. Zero-day attacks refer to security breaches that exploit previously unknown vulnerabilities in software or systems, making them particularly challenging to detect and defend against.</p><br></br>
    <p>At our web application, we leverage the power of machine learning to provide robust protection. Our approach involves a two-layer system designed to identify various types of attacks, including DDoS (Distributed Denial of Service), DDoS Golden Eye, bot attacks, sshpatator attacks, FTP patator attacks, and more.</p><br></br>
    <p>In the first layer, we employ a Random Forest model with an impressive accuracy rate of 98%. This model analyzes network logs and determines whether they contain any malicious activities. If the logs are flagged as potentially harmful, they proceed to the second layer for further examination.</p><br></br>
    <p>In the second layer, we create an Isolation Forest model tailored to each specific type of attack. By comparing the network logs against these attack-specific models, we can accurately identify known attacks. However, our system doesn't stop there. If the logs do not match any of the pre-defined attack patterns, they are classified as zero-day attacks, indicating potential novel threats that have not been previously encountered.</p><br></br>
    <p>Our website aims to address these concerns by offering a reliable network analysis and providing you with the most accurate assessment of the safety or maliciousness of your network logs. We strive to enhance your security posture and protect your valuable assets from the ever-evolving landscape of cyber threats.</p><br></br>
    <h1>PYTHON CICFLOWMETER</h1>
    <p>add this text to up text Installation</p>
    <a href="https://gitlab.com/hieulw/cicflowmeter" target="_blank">https://gitlab.com/hieulw/cicflowmeter</a>
    <p>cd cicflowmeter</p>
    <p>python setup.py install</p>
    <p>or</p>
    <p>pip install cicflowmeter</p>
    <h2>Usage</h2>
    <p>usage: cicflowmeter [-h] (-i INPUT_INTERFACE | -f INPUT_FILE) [-c] [-u URL_MODEL] output</p>
    <p>positional arguments:</p>

</div>


    );
  
};
export default FileUpload;