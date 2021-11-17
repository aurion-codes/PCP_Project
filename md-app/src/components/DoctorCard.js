import DoctorForm from "./DoctorForm";

function DoctorCard({doctor, setClicked, handleDoctorDelete, doctorData, handleDoctorForm, handleDoctorEdit, setEditing, setDoctorData, editing}) {
    return (
        <>
            {editing ? <DoctorForm doctorData={doctorData} handleDoctorForm={handleDoctorForm} handleDoctorSubmit={handleDoctorEdit} /> 
            :
            <>
                <h1>{doctor.first_name} {doctor.last_name}</h1>
                <h2>{doctor.specialty}</h2>
                <button onClick={() => {setEditing(true); setDoctorData(doctor)}}>Edit Doctor</button>
                <button onClick={() => {handleDoctorDelete(doctor); setClicked(false)}}>Delete Doctor</button>
                </>
            }
        </>
    )
}

export default DoctorCard