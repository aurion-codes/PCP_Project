import { useState } from "react"
import DoctorCard from "./DoctorCard"

const listStyles = {
    listStyleType: "none",
    background: "#b6e1fc",
    width: "300px",
    marginLeft:"100px",
    padding: "10px",
    border: `solid 2px #121592`,
    borderRadius: "10px",
    boxShadow: `3px 3px 5px #121592`
}

const listItemStyles = {
    marginBottom: "5px",
    marginLeft: "20px",
    width: "300px"
}

function Doctors({doctor, setDoctor, doctors, handleDoctorDelete, doctorData, handleDoctorForm, handleDoctorEdit, setEditing, setDoctorData, editing}) {
    const doctorList = doctors.map(doctor => {return <li className="listItem" style={listItemStyles} key={doctor.id} onClick={() => {handleClick(doctor); setEditing(false)}}>{doctor.first_name} {doctor.last_name}</li>})
    const [clicked, setClicked] = useState(false)
    
    function handleClick(doctor) {
        setClicked(true)
        setDoctor(doctor)
    }
    
    return (
        <>
            <ul style={listStyles}>
                <h1 style={{marginTop: "1px"}}>Doctors:</h1>
                {doctorList}
            </ul>
            {clicked ? 
                <DoctorCard 
                    doctor={doctor} 
                    setClicked={setClicked} 
                    handleDoctorDelete={handleDoctorDelete} 
                    doctorData={doctorData} 
                    handleDoctorForm={handleDoctorForm} 
                    handleDoctorEdit={handleDoctorEdit} 
                    setEditing={setEditing} 
                    setDoctorData={setDoctorData} 
                    editing={editing} 
                /> 
                : 
                null
            }
        </>
    )
}

export default Doctors