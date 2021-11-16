function PatientCard({patient, doctor}) {
    return (
        <>
            <h1>{patient.first_name} {patient.last_name}</h1>
            <h3>{`${doctor.first_name} ${doctor.last_name}`}</h3>
            <p>{patient.patient_history}</p>
        </>
    )
}

export default PatientCard