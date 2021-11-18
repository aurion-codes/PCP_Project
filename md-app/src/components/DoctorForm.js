const formStyles = {
    display: "flex",
    flexDirection: "column",
    height: "300px",
    maxWidth: "500px",
    justifyContent: "space-around"
}

function DoctorForm({doctorData, handleDoctorForm, handleDoctorSubmit}) {
    return (
        <>
        <form style={formStyles} onSubmit={handleDoctorSubmit}>
            <label>
                First Name:<br />
                <input type="text" value={doctorData.first_name} name="first_name" onChange={handleDoctorForm} />
            </label>
            <label>
                Last Name:<br />
                <input type="text" value={doctorData.last_name} name="last_name" onChange={handleDoctorForm} />
            </label>
            <label>
                Specialty:<br />
                <textarea value={doctorData.specialty} name="specialty" onChange={handleDoctorForm} />
            </label>
            <input style={{width: "100px", alignSelf: "flex-end"}} type="submit" value="Submit" />
        </form>
    </>
    )
}

export default DoctorForm