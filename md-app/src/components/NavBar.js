import { NavLink } from "react-router-dom"

const navStyles = {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "50px"
}

const linkStyles = {
    textDecoration: "none",
    border: "none",
    borderRadius: "2px",
    padding: "3px 8px",
    background: "lightgray",
    color: "black"
}

function NavBar() {
    return (
        <div style={navStyles}>
            <NavLink
                to="/"
                style={linkStyles}
            >Home</NavLink>
            <NavLink
                to="/doctors"
                style={linkStyles}
            >Doctors</NavLink>
            <NavLink
                to="/patients"
                style={linkStyles}
            >Patients</NavLink>
            <NavLink
                to="/add"
                style={linkStyles}
            >Add to the DB</NavLink>
        </div>
    )
}

export default NavBar