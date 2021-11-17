import PatientForm from "./PatientForm";

function PatientCard({patient, doctor, handlePatientDelete, setClicked, handlePatientForm, handlePatientEdit, doctors, setPatientData, patientData, editing, setEditing}) {
    
    return (
        <>
            {editing ? <PatientForm patientData={patientData} handlePatientForm={handlePatientForm} handlePatientSubmit={handlePatientEdit} doctors={doctors} /> : <>
            <h1>{patient.first_name} {patient.last_name}</h1>
            <h3>{`${doctor.first_name} ${doctor.last_name}`}</h3>
            <p>{patient.patient_history}</p>
            <button onClick={() => {setEditing(true); setPatientData(patient)}}>Edit Patient</button>
            <button onClick={() => {handlePatientDelete(patient); setClicked(false)}}>Delete Patient</button>
            </>}
        </>
    )
}

export default PatientCard