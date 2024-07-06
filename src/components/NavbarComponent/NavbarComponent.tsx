import "./NavbarComponent.css";
function NavbarComponent() {
  return (
    <nav id="navbar-container">
      <div className="navbar-item-data">Home</div>
      <div className="navbar-item">
        <div className="navbar-item-data">About</div>
        <i className="fa-regular fa-chevron-down navbar-icon" />
      </div>
      <div className="navbar-item">
        <div className="navbar-item-data">Facilities</div>
        <i className="fa-regular fa-chevron-down navbar-icon" />
      </div>
      <div className="navbar-item">
        <div className="navbar-item-data">Admissions</div>
        <i className="fa-regular fa-chevron-down navbar-icon" />
      </div>
      <div className="navbar-item">
        <div className="navbar-item-data">Circulars</div>
        <i className="fa-regular fa-chevron-down navbar-icon" />
      </div>
      <div className="navbar-item">
        <div className="navbar-item-data">Alumni</div>
        <i className="fa-regular fa-chevron-down navbar-icon" />
      </div>
      <div className="navbar-item-data">Contact US</div>
    </nav>
  );
}

export default NavbarComponent;
