import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import StudentDashBoard from "./student/StudentDashBoard.jsx";
import Timetable from "./student/Timetable.jsx";

function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />

      {/* Login page */}
      <Route path="/login" element={<Login />} />

      {/* Student pages */}
      <Route path="/student/dashboard" element={<StudentDashBoard />} />
      <Route path="/student/timetable" element={<Timetable />} />

      {/* Optional test route */}
      <Route path="/test" element={<h1>Test Page</h1>} />
    </Routes>
  );
}

export default App;
