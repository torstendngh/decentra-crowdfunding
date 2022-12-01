import "./NavbarTabButton.css"

function NavbarTabButton({ icon, title, activeTab }) {

  return (
    <button className={`NavbarTabButton ${activeTab ? "ActiveTab" : ""}`}>
      {icon}
      {title}
    </button>
  );
}

export default NavbarTabButton;
