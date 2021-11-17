import DoctorForm from "./DoctorForm"
import PatientForm from "./PatientForm"

function AddPage({patientData, handlePatientForm, handlePatientSubmit, doctorData, handleDoctorForm, handleDoctorSubmit, doctors}) {
    return (
        <div>
            <DoctorForm doctorData={doctorData} handleDoctorForm={handleDoctorForm} handleDoctorSubmit={handleDoctorSubmit} />
            <PatientForm patientData={patientData} handlePatientForm={handlePatientForm} handlePatientSubmit={handlePatientSubmit} doctors={doctors} />
        </div>
    )
}

export default AddPage