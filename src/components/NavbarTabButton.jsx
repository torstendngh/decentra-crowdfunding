import "./NavbarTabButton.css"
import { useNavigate } from 'react-router-dom'

function NavbarTabButton({ icon, title, activeTab, to }) {

  const navigate = useNavigate()

  return (
    <button
      to={to}
      className={"NavbarTabButton " + `${window.location.pathname == to ? "ActiveTab" : ""}`}
      type="button"
      onClick={() => navigate(to)}
    >
      {icon}
      {title}
    </button>
  );
}

export default NavbarTabButton;
