import { useState } from "react"
import DoctorCard from "./DoctorCard"

function Doctors({doctors}) {
    const doctorList = doctors.map(doctor => {return <li key={doctor.id} onClick={() => handleClick(doctor)}>{doctor.first_name} {doctor.last_name}</li>})
    const [clicked, setClicked] = useState(false)
    const [doctor, setDoctor] = useState(null)
    
    function handleClick(doctor) {
        setClicked(true)
        setDoctor(doctor)
    }
    
    return (
        <>
            <ul>
                {doctorList}
            </ul>
            {clicked ? <DoctorCard doctor={doctor} /> : null}
        </>
    )
}

export default Doctors