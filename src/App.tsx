import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SignIn } from "./pages/login/login";
import Dashboard from "./pages/Dashboard/index";
import { SignUp } from "./pages/signup/signUp";
import Residents from "./pages/residents";
import ResidentProfile from "./pages/residents/residentProfile";
import ViewResident from "./pages/residents/viewResident";
import AddMedication from "./pages/medications/addMedication";
import MedicalRecord from "./pages/medications/medicalRecord";
import AddMedicalRecord from "./pages/medications/addMedicalRecord";
import MedicalRecords from "./pages/medications/medicalRecordsTable";
import Staff from "./pages/staff";
import StaffProfile from "./pages/staff/staffProfile";
import ViewStaff from "./pages/staff/viewStaff";
import Tasks from "./pages/tasks";
import StaffTasks from "./pages/tasks/staffTasks";
import AddTask from "./pages/tasks/addTask";
import MyTasks from "./pages/tasks/myTasks";
import Inventory from "./pages/inventory";
import EditProduct from "./pages/inventory/editProduct";
import AddProduct from "./pages/inventory/addProduct";
import FamilyMembers from "./pages/familyMembers";
import AddResident from "./pages/residents/AddResident.tsx";
import AddStaffMember from "./pages/staff/addStaff/index.tsx";

function App() {
  localStorage.setItem("staffId", 7);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/residents" element={<Residents />} />
          <Route path="/residents/add" element={<AddResident />} />
          <Route path="/resident/:id/edit" element={<ResidentProfile />} />
          <Route path="/resident/:residentId" element={<ViewResident />} />
          <Route
            path="/resident/:residentId/addMedication/:medicalRecordId"
            element={<AddMedication />}
          />
          {/* addMedication */}
          <Route
            path="/resident/:recordId/medicalRecord"
            element={<MedicalRecord />}
          />
          <Route
            path="/resident/:residentId/addMedicalRecord"
            element={<AddMedicalRecord />}
          />

          <Route
            path="/residents/MedicalRecords"
            element={<MedicalRecords />}
          />
          <Route path="/staff" element={<Staff />} />
          <Route path="/staff/add" element={<AddStaffMember />} />
          <Route path="/staff/:staffId" element={<ViewStaff />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/staff/:staffId/tasks" element={<StaffTasks />} />
          <Route path="/staff/:staffId/addTask" element={<AddTask />} />
          <Route path="/staff/:staffId/myTasks" element={<MyTasks />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:productId/edit" element={<EditProduct />} />
          <Route path="/inventory/addProduct" element={<AddProduct />} />
          <Route path="/FamilyMembers" element={<FamilyMembers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
