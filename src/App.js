import "./App.css";
import LeftPane from "./Components/LeftPane/LeftPane";
import Nav from "./Components/Nav/Nav";
import Dashboard from "./Pages/Dashboard/Dashboard";
import StudentManagement from "./Pages/StudentManagement/StudentManagement";
import Application from "./Pages/Application/Application";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Advertisment from "./Pages/Advertisment/Advertisment";
import Circular from "./Pages/Circular/Circular";
import Admission from "./Pages/Admission/Admission"
import Setup from "./Pages/Fees/Setup/Setup"
import Report from "./Pages/Fees/Report/Report"
import Teacher from "./Pages/Teacher/Teacher";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LeftPane />
      <div className="main_container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav title="Dashboard" />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/advertisment"
            element={
              <>
                <Nav title="Advertisment" />
                <Advertisment />
              </>
            }
          />
          <Route
            path="/fee_setup"
            element={
              <>
                <Nav title="Fees Management" />
                <Setup />
              </>
            }
          />
          <Route
            path="/fee_report"
            element={
              <>
                <Nav title="Fees Management" />
                <Report />
              </>
            }
          />
          <Route
            path="/teacher"
            element={
              <>
                <Nav title="Teacher" />
                <Teacher />
              </>
            }
          />
          <Route
            path="/circular"
            element={
              <>
                <Nav title="Circular" />
                <Circular />
              </>
            }
          />
          <Route
            exact
            path="/students"
            element={
              <>
                <Nav title="Student Management" />
                <StudentManagement />
              </>
            }
          />
          <Route
            exact
            path="/application"
            element={
              <>
                <Nav title="Application" />
                <Application />
              </>
            }
          />
          <Route
            exact
            path="/new_admission"
            element={
              <>
                <Nav title="New Admission" />
                <Admission />
              </>
            }
          />
          <Route
            exact
            path="/about-us"
            element={
              <>
                <Nav title="About Us" />
                <AboutUs />
              </>
            }
          />
        </Routes>
      </div>
      <div className="bottom-theme"></div>
    </div>
  );
}

export default App;
