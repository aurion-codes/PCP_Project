import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPage from "./components/AddPage";
import Doctors from "./components/Doctors";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Patients from "./components/Patients";

function App() {
  const [doctors, setDoctors] = useState([])
  const [patients, setPatients] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/doctors')
    .then(r => r.json())
    .then(data => {
      setDoctors(data)
    });
    fetch('http://localhost:9292/patients')
    .then(r => r.json())
    .then(data => {
      setPatients(data)
    })
  }, [])

  return (
    <div>
      <Header />
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/doctors' element={<Doctors doctors={doctors} />} />
            <Route path='/patients' element={<Patients patients={patients} doctors={doctors} />} />
            <Route path='/add' element={<AddPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
