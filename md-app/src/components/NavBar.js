import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <NavLink
                to="/"
            >Home</NavLink>
            <NavLink
                to="/doctors"
            >Doctors</NavLink>
            <NavLink
                to="/patients"
            >Patients</NavLink>
            <NavLink
                to="/add"
            >Add to the DB</NavLink>
        </div>
    )
}

export default NavBar