import DoctorForm from "./DoctorForm"
import PatientForm from "./PatientForm"

const pageStyle = {
    display: "flex",
    justifyContent: "space-around"
}

function AddPage({patientData, handlePatientForm, handlePatientSubmit, doctorData, handleDoctorForm, handleDoctorSubmit, doctors}) {
    return (
        <div style={pageStyle}>
            <div style={boxStyle}>
                <h1>Add a Doctor:</h1>
                <DoctorForm doctorData={doctorData} handleDoctorForm={handleDoctorForm} handleDoctorSubmit={handleDoctorSubmit} />
            </div>
            <div style={boxStyle}>
                <h1>Add a Patient:</h1>
                <PatientForm patientData={patientData} handlePatientForm={handlePatientForm} handlePatientSubmit={handlePatientSubmit} doctors={doctors} />
            </div>
        </div>
    )
}

export default AddPage

const boxStyle = { 
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