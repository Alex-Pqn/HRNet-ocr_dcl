import './DefaultHeader.scss';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <Link to="/">
          <h1>HR Net</h1>
        </Link>
      </div>
      <div className="header__navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">Employees</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
