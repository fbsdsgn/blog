import logo from "../../assets/svg/logo.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <div className="nav__logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav__search">
            <input className="nav__input" placeholder="Search" type="text" name="search" />
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#home">
                  Categories
                </a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="#home">
                  About
                </a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="#home">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
