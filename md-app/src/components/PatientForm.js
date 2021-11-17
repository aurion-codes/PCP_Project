function PatientForm({patientData, handlePatientForm, handlePatientSubmit, doctors}) {
    return (
        <>
            <form onSubmit={handlePatientSubmit}>
                <label>
                    First Name:
                    <input type="text" value={patientData.first_name} name="first_name" onChange={handlePatientForm} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={patientData.last_name} name="last_name" onChange={handlePatientForm} />
                </label>
                <label>
                    Medical History:
                    <textarea value={patientData.patient_history} name="patient_history" onChange={handlePatientForm} />
                </label>
                <label>
                    Doctor:
                    <select value={patientData.doctor_id} name="doctor_id" onChange={handlePatientForm} >
                        {doctors.map(doctor => {return <option key={doctor.id} value={doctor.id}>{doctor.first_name} {doctor.last_name}</option>})}
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default PatientForm