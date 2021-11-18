import { useState } from "react"
import PatientCard from "./PatientCard"

const listStyles = {
    listStyleType: "none",
    background: "lightblue",
    width: "300px",
    marginLeft:"100px",
    padding: "10px",
    border: "none",
    borderRadius: "10px"
}

const listItemStyles = {
    marginBottom: "5px",
    marginLeft: "20px",
    width: "300px"
}

function Patients({patient, setPatient, patients, myDoctor, setMyDoctor, doctors, handlePatientDelete, handlePatientForm, handlePatientEdit, setPatientData, patientData, editing, setEditing}) {
    let patientList = patients.map(patient => {
        return <li className="listItem" style={listItemStyles} key={patient.id} onClick={() => handleClick(patient)} >{patient.first_name} {patient.last_name}</li>
    })
    const [clicked, setClicked] = useState(false)

    function handleClick(patient) {
        setClicked(true)
        setPatient(patient)
        let doctor = doctors.find(doctor => doctor.id === patient.doctor_id)
        setMyDoctor(doctor)
    }

    return (
        <>
            <ul style={listStyles} >
                {patientList}
            </ul>
            {clicked ? 
                <PatientCard 
                    patient={patient} 
                    doctor={myDoctor} 
                    handlePatientDelete={handlePatientDelete} 
                    setClicked={setClicked} 
                    handlePatientForm={handlePatientForm} 
                    handlePatientEdit={handlePatientEdit} 
                    doctors={doctors} 
                    setPatientData={setPatientData} 
                    patientData={patientData} 
                    editing={editing}
                    setEditing={setEditing}
                /> 
                : 
                null 
            }
        </>
    )
}

export default Patients