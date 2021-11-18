import logo from "../images/DBMDlogo.png";

const imgStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px"
}

function Header() {
    return (
        <div style={imgStyle}>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Header