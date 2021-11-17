function DoctorCard({doctor, setClicked, handleDoctorDelete}) {
    return (
        <>
            <h1>{doctor.first_name} {doctor.last_name}</h1>
            <h2>{doctor.specialty}</h2>
            <button onClick={() => {handleDoctorDelete(doctor); setClicked(false)}}>Delete Doctor</button>
        </>
    )
}

export default DoctorCard