import { useState } from "react"
import DoctorCard from "./DoctorCard"

function Doctors({doctor, setDoctor, doctors, handleDoctorDelete, doctorData, handleDoctorForm, handleDoctorEdit, setEditing, setDoctorData, editing}) {
    const doctorList = doctors.map(doctor => {return <li key={doctor.id} onClick={() => handleClick(doctor)}>{doctor.first_name} {doctor.last_name}</li>})
    const [clicked, setClicked] = useState(false)
    
    function handleClick(doctor) {
        setClicked(true)
        setDoctor(doctor)
    }
    
    return (
        <>
            <ul>
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