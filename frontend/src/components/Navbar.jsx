import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <h1 className="title">Co-WIN SLOT FINDER</h1>
      <nav className="navbar">
        <Link to="/">HOME</Link>
        <a
          href="https://selfregistration.cowin.gov.in/selfregistration"
          target="_blank"
          rel="noreferrer"
        >
          Co-WIN Register/Sign-In
        </a>
      </nav>
      <hr />
    </>
  );
}
