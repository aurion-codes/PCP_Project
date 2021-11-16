import { useState } from "react"
import PatientCard from "./PatientCard"

function Patients({patients, doctors}) {
    const patientList = patients.map(patient => {return <li key={patient.id} onClick={() => handleClick(patient)} >{patient.first_name} {patient.last_name}</li>})
    const [clicked, setClicked] = useState(false)
    const [patient, setPatient] = useState(null)
    const [myDoctor, setMyDoctor] = useState(null)

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
            {clicked ? <PatientCard patient={patient} doctor={myDoctor} /> : null }
        </>
    )
}

export default Patients