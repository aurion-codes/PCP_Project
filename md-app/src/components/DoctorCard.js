
import DoctorForm from "./DoctorForm";

function DoctorCard({doctor, setClicked, handleDoctorDelete, doctorData, handleDoctorForm, handleDoctorEdit, setEditing, setDoctorData, editing}) {
    return (
        < div style={doctorInfoCard}>
            {editing ? <DoctorForm doctorData={doctorData} handleDoctorForm={handleDoctorForm} handleDoctorSubmit={handleDoctorEdit} /> 
            :
            <>
                <h1>Dr. {doctor.first_name} {doctor.last_name}</h1>
                <h2>Department: {doctor.specialty}</h2>
                <button onClick={() => {setEditing(true); setDoctorData(doctor)}}>Edit Doctor</button>
                <button onClick={() => {handleDoctorDelete(doctor); setClicked(false)}}>Delete Doctor</button>
                </>
            }
        </ div>
    )
}

export default DoctorCard

const doctorInfoCard = {
  border: `solid 5px #121592`,
  backgroundColor: `#b6e1fc`,
  borderRadius: `40px`,
  height: `60%`,
  width: `500px`,
  padding: `25px`,
  marginTop: `50px`,
  marginLeft: "auto",
  marginRight: "auto",
  boxShadow: `8px 8px 10px #121592`
}