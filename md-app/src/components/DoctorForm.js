function DoctorForm({doctorData, handleDoctorForm, handleDoctorSubmit}) {
    return (
        <>
        <form onSubmit={handleDoctorSubmit}>
            <label>
                First Name:
                <input type="text" value={doctorData.first_name} name="first_name" onChange={handleDoctorForm} />
            </label>
            <label>
                Last Name:
                <input type="text" value={doctorData.last_name} name="last_name" onChange={handleDoctorForm} />
            </label>
            <label>
                Specialty:
                <textarea value={doctorData.specialty} name="specialty" onChange={handleDoctorForm} />
            </label>
            <input type="submit" value="Add Doctor" />
        </form>
    </>
    )
}

export default DoctorForm