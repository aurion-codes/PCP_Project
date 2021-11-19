import { NavLink } from "react-router-dom"

const navStyles = {
    borderBottom: "1px solid #f2f2f2",
    display: "flex",
    padding: "25px",
    height: "40px",
    justifyContent: "space-around",
    backgroundColor: "#b6e1fc",
    display: "flex",
    alignitems: "center",
    maxwidth: "1000px",
    marginBottom: "50px"
    
}

const linkStyles = {
    textDecoration: "none",
    border: "solid, black",
    borderRadius: "2px",
    padding: "3px 8px",
    color: "black",
   
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