import { Link } from "react-router";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Header;
