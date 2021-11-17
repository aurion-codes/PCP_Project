import { useState } from "react"
import PatientCard from "./PatientCard"

function Patients({patient, setPatient, patients, myDoctor, setMyDoctor, doctors, handlePatientDelete, handlePatientForm, handlePatientEdit, setPatientData, patientData, editing, setEditing}) {
    const patientList = patients.map(patient => {
        return <li key={patient.id} onClick={() => handleClick(patient)} >{patient.first_name} {patient.last_name}</li>
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
            <ul>
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