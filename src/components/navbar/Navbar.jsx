import "./navbar.css"

/**
 * This function returns a div with a class of navbar, which contains a div with a class of
 * navContainer, which contains a span with a class of logo, which contains the text 'davbooking',
 * which contains a div with a class of navItems, which contains a button with a class of navButton,
 * which contains the text 'Register', which contains a button with a class of navButton, which
 * contains the text 'Login'.
 * @returns A React component.
 */
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">davbooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar