function DoctorCard({doctor}) {
    return (
        <>
            <h1>{doctor.first_name} {doctor.last_name}</h1>
            <h2>{doctor.specialty}</h2>
        </>
    )
}

export default DoctorCard