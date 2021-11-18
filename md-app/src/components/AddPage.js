import DoctorForm from "./DoctorForm"
import PatientForm from "./PatientForm"

const pageStyle = {
    display: "flex",
    justifyContent: "space-around"
}

function AddPage({patientData, handlePatientForm, handlePatientSubmit, doctorData, handleDoctorForm, handleDoctorSubmit, doctors}) {
    return (
        <div style={pageStyle}>
            <div>
                <h1>Add a Doctor:</h1>
                <DoctorForm doctorData={doctorData} handleDoctorForm={handleDoctorForm} handleDoctorSubmit={handleDoctorSubmit} />
            </div>
            <div>
                <h1>Add a Patient:</h1>
                <PatientForm patientData={patientData} handlePatientForm={handlePatientForm} handlePatientSubmit={handlePatientSubmit} doctors={doctors} />
            </div>
        </div>
    )
}

export default AddPage