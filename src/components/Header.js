
const headerLogo = (
    <div className="logo-container">
      <h2>Better Call Saul</h2>
    </div>
  );
  
  const Navbar = () => {
    return (
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  };
  
  const Header = () => {
    return (
      <div className="header">
        {headerLogo}
        <Navbar />
      </div>
    );
  };


  export default Header;