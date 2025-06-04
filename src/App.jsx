import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarLayout from "./layouts/SidebarLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import StudentForm from './pages/StudentForm';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route index element={<Home />} />
          <Route path="student-form" element={<StudentForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
