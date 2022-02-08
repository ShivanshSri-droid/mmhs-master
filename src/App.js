import "./App.css";
import LeftPane from "./Components/LeftPane/LeftPane";
import Nav from "./Components/Nav/Nav";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Student_Management from "./Pages/StudentManagement/Student_Management";
import Application from "./Pages/Application/Application";
import AboutUs from "./Pages/AboutUs/AboutUs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LeftPane />
      <div className="main_container">
        {/* <Student_Management/>  */}
        {/* <Application/>  */}
        <AboutUs/>
      </div>
      <div className="bottom-theme"></div>
    </div>
  );
}

export default App;
