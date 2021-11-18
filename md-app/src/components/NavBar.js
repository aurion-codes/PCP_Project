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

function NavBar({setEditing}) {
    return (
        <div style={navStyles}>
            <NavLink
                to="/"
                style={linkStyles}
                onClick={() => setEditing(false)}
            >Home</NavLink>
            <NavLink
                to="/doctors"
                style={linkStyles}
                onClick={() => setEditing(false)}
            >Doctors</NavLink>
            <NavLink
                to="/patients"
                style={linkStyles}
                onClick={() => setEditing(false)}
            >Patients</NavLink>
            <NavLink
                to="/add"
                style={linkStyles}
                onClick={() => setEditing(false)}
            >Add to the DB</NavLink>
        </div>
    )
}

export default NavBar