import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarLayout from "./layouts/SidebarLayout";
import UniversityCounsellorForm from './pages/UniversityCounsellorForm';
import StudentsData from './pages/StudentsData';
import StudentAnalysis from './pages/StudentAnalysis';
import StudentForm from './pages/StudentForm';
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route index element={<StudentForm />} />
          <Route path="university-counsellor-registration" element={<UniversityCounsellorForm />} />
          <Route path="students-data" element={<StudentsData />} />
          <Route path="student-analysis" element={<StudentAnalysis />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
