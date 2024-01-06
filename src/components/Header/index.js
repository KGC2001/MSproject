// Header.js

import {Link} from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="navbars">
      <Link to="/" style={{textDecoration: 'none'}}>
        <h1 className="head1">MotherSon</h1>
      </Link>
      <ul className="head2">
        <Link to="/about" style={{textDecoration: 'none', color: 'yellow'}}>
          <li>About</li>
        </Link>
        <Link to="/projects" style={{textDecoration: 'none', color: 'yellow'}}>
          <li>Projects</li>
        </Link>

        <Link to="/contact" style={{textDecoration: 'none', color: 'yellow'}}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  </header>
)

export default Header
