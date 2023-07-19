import FileUpload from "./components/main";
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIconName } from '@fortawesome/free-solid-svg-icons';
import  '@fortawesome/react-fontawesome';
import Page1 from "./components/page1.js";
import Page2 from "./components/pagee.js";
import Page3 from "./components/page2.js";
function App() {
  return (
    
      <Routes>
               
          <Route path="/new" element = {<Page1 />}></Route>
          <Route path="/" element = {<Page2 />}></Route>
          <Route path="/neww" element = {<Page3 />}></Route>


      </Routes>
  );
}

export default App;
