
import { useEffect, useState } from "react";
import DoctorForm from "./DoctorForm";

function DoctorCard({doctor, setClicked, handleDoctorDelete, doctorData, handleDoctorForm, handleDoctorEdit, setEditing, setDoctorData, editing}) {
    const [patients, setPatients] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/doctors/${doctor.id}/patients`)
        .then(r => r.json())
        .then(data => {
            setPatients(data)
        })
    }, [])

    let patientList = patients.map(patient => {
        return <li key={patient.id} >{patient.first_name} {patient.last_name}</li>
    })
    
    return (
        < div style={doctorInfoCard}>
            {editing ? <DoctorForm doctorData={doctorData} handleDoctorForm={handleDoctorForm} handleDoctorSubmit={handleDoctorEdit} /> 
            :
            <>
                <h1>Dr. {doctor.first_name} {doctor.last_name}</h1>
                <h2>Department: {doctor.specialty}</h2>
                <h3>Patients:</h3>
                <ul>
                    {patientList.length === 0 ? <p>None</p> : patientList}
                </ul>
                <button onClick={() => {setEditing(true); setDoctorData(doctor)}}>Edit Doctor</button>
                <button onClick={() => {handleDoctorDelete(doctor); setClicked(false)}}>Delete Doctor</button>
                </>
            }
        </ div>
    )
}

export default DoctorCard

const doctorInfoCard = {
  border: `solid 5px #121592`,
  backgroundColor: `#b6e1fc`,
  borderRadius: `40px`,
  height: `60%`,
  width: `500px`,
  padding: `25px`,
  marginTop: `50px`,
  marginLeft: "auto",
  marginRight: "auto",
  boxShadow: `8px 8px 10px #121592`
}