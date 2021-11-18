const formStyles = {
    display: "flex",
    flexDirection: "column",
    height: "300px",
    maxWidth: "500px",
    justifyContent: "space-around"
}

function PatientForm({patientData, handlePatientForm, handlePatientSubmit, doctors}) {
    return (
        <>
            <form style={formStyles} onSubmit={handlePatientSubmit}>
                <label>
                    First Name:<br />
                    <input type="text" value={patientData.first_name} name="first_name" onChange={handlePatientForm} />
                </label>
                <label>
                    Last Name:<br />
                    <input type="text" value={patientData.last_name} name="last_name" onChange={handlePatientForm} />
                </label>
                <label>
                    Current Diagnoses:<br />
                    <textarea value={patientData.patient_history} name="patient_history" onChange={handlePatientForm} />
                </label>
                <label>
                    Doctor:<br />
                    <select value={patientData.doctor_id} name="doctor_id" onChange={handlePatientForm} >
                        {doctors.map(doctor => {return <option key={doctor.id} value={doctor.id}>{doctor.first_name} {doctor.last_name}</option>})}
                    </select>
                </label>
                <input style={{width: "100px", alignSelf: "flex-end"}} type="submit" value="Submit" />
            </form>
        </>
    )
}

export default PatientForm