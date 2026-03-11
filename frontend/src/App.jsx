import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import StudentDashBoard from "./student/StudentDashBoard.jsx";
import Timetable from "./student/Timetable.jsx";
import Assignment from "./student/Assignment.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

    
      <Route path="/login" element={<Login />} />

    
      <Route path="/student/dashboard" element={<StudentDashBoard />} />
      <Route path="/student/assignments" element={<Assignment />} />
      <Route path="/student/timetable" element={<Timetable />} />

      <Route path="/test" element={<h1>Test Page</h1>} />
    </Routes>
  );
}

export default App;
