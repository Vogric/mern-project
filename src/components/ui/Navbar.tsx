const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">User</span>
      <button className="btn btn-outline-danger">
        <span>
          <i className="fas fa-sign-out-alt"></i> Exit
        </span>
      </button>
    </div>
  );
};

export default Navbar;
