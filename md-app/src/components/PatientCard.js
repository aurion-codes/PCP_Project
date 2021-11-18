import PatientForm from "./PatientForm";

function PatientCard({patient, doctor, handlePatientDelete, setClicked, handlePatientForm, handlePatientEdit, doctors, setPatientData, patientData, editing, setEditing}) {
    
    return (
        <div style={patientInfoCard}>
            {editing ? <PatientForm patientData={patientData} handlePatientForm={handlePatientForm} handlePatientSubmit={handlePatientEdit} doctors={doctors} /> : <>
            <h1>{patient.first_name} {patient.last_name}</h1>
            <h3>{`${doctor.first_name} ${doctor.last_name}`}</h3>
            <p>{patient.patient_history}</p>
            <button onClick={() => {setEditing(true); setPatientData(patient)}}>Edit Patient</button>
            <button onClick={() => {handlePatientDelete(patient); setClicked(false)}}>Delete Patient</button>
            </>}
        </div>
    )
}

export default PatientCard

const patientInfoCard = {
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