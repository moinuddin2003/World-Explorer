import { MdOutlineDarkMode } from "react-icons/md";
import "../App.scss";
import "../index.scss";

export default function Navbar() {
  return (
    <nav className="main">
      <div className="left">Where in the World</div>
      <div className="right">
        <MdOutlineDarkMode />
        <span>Dark Mode</span>
      </div>
    </nav>
  );
}
