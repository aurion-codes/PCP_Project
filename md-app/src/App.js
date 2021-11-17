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
  const [displayDoctors, setDisplayDoctors] = useState([])
  const [displayPatients, setDisplayPatients] = useState([])
  const [defaultDoc, setDefaultDoc] = useState("")
  const [editing, setEditing] = useState(false)
  const [patient, setPatient] = useState(null)
  const [myDoctor, setMyDoctor] = useState(null)
  const [patientData, setPatientData] = useState({
    first_name: "",
    last_name: "",
    patient_history: "",
    doctor_id: ""
  })
  const [doctorData, setDoctorData] = useState({
    first_name: "",
    last_name: "",
    specialty: ""
  })

  useEffect(() => {
    fetch('http://localhost:9292/doctors')
    .then(r => r.json())
    .then(data => {
      setDoctors(data)
      setDisplayDoctors(data)
      setDefaultDoc(data[0].id)
    });
    fetch('http://localhost:9292/patients')
    .then(r => r.json())
    .then(data => {
      setPatients(data)
      setDisplayPatients(data)
    })
  }, [])

  function handlePatientForm(e) {
    setPatientData({...patientData, [e.target.name] : e.target.value})
  }

  function handleDoctorForm(e) {
    setDoctorData({...doctorData, [e.target.name] : e.target.value})
  }

  function handlePatientSubmit(e) {
    e.preventDefault()
    if (patientData.doctor_id === "") {
      patientData.doctor_id = defaultDoc
    }
    fetch('http://localhost:9292/patients', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(patientData)
    }).then(r => r.json())
    .then(data => {
      setPatients([...patients, data])
      setDisplayPatients([...displayPatients, data])
      setPatientData({
        first_name: "",
        last_name: "",
        patient_history: "",
        doctor_id: ""
      })
    })
  }

  function handleDoctorSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:9292/doctors', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(doctorData)
    }).then(r => r.json())
    .then(data => {
      console.log(data)
      setDoctors([...doctors, data])
      setDisplayDoctors([...displayDoctors, data])
      setDoctorData({
        first_name: "",
        last_name: "",
        specialty: ""
      })
    })
  }

  function handlePatientDelete(patient) {
    fetch(`http://localhost:9292/patients/${patient.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json",
      }
    })
    deletePatient(patient)
  }

  function deletePatient(patient) {
    const updatedPatients = displayPatients.filter(item => item.id !== patient.id)
    setDisplayPatients(updatedPatients)
  }

  function handleDoctorDelete(doctor) {
    fetch(`http://localhost:9292/doctors/${doctor.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json",
      }
    })
    deleteDoctor(doctor)
  }

  function deleteDoctor(doctor) {
    const updatedDoctors = displayDoctors.filter(item => item.id !== doctor.id)
    setDisplayDoctors(updatedDoctors)
  }

  function handlePatientEdit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/patients/${patientData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(patientData)
    }).then(r => r.json())
    .then(data => {
      const idx = displayPatients.filter(item => item.id === patientData.id)
      const tempPatients = [...displayPatients]
      tempPatients[idx] = data
      setDisplayPatients(tempPatients)
      setPatient(tempPatients[idx])
      let doctor = doctors.find(doctor => doctor.id === tempPatients[idx].doctor_id)
      setMyDoctor(doctor)
      setPatientData({
        first_name: "",
        last_name: "",
        patient_history: "",
        doctor_id: ""
      })
      setEditing(false)
    })
  }


  return (
    <div>
      <Header />
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/doctors' element={
              <Doctors 
                doctors={displayDoctors} 
                handleDoctorDelete={handleDoctorDelete} 
              />} 
            />
            <Route path='/patients' element={
              <Patients 
                patient={patient}
                setPatient={setPatient}
                patients={displayPatients}
                myDoctor={myDoctor}
                setMyDoctor={setMyDoctor} 
                doctors={displayDoctors} 
                handlePatientDelete={handlePatientDelete} 
                handlePatientForm={handlePatientForm} 
                handlePatientEdit={handlePatientEdit} 
                setPatientData={setPatientData} 
                patientData={patientData}
                editing={editing}
                setEditing={setEditing} 
              />} 
            />
            <Route path='/add' element={<AddPage patientData={patientData} handlePatientForm={handlePatientForm} handlePatientSubmit={handlePatientSubmit} doctorData={doctorData} handleDoctorForm={handleDoctorForm} handleDoctorSubmit={handleDoctorSubmit} doctors={displayDoctors} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
