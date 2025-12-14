import "./index.css";
import Logo from "../../assets/TechPhone-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
  <div className="navbar-left">
    <img src={Logo} alt="TechPhone logo" className="navbar-logo" />
    <h2 className="navbar-title">TechPhone</h2>
  </div>

  <div className="navbar-right">
    <a href="/home">Home</a>
    <a href="/services">Services</a>
    <a href="/process">Process</a>
  </div>
</nav>

  );
}
