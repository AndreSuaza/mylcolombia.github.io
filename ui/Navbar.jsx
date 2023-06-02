import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg bd-navbar sticky-top bg-dark bg-opacity-25">
        <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap px-5" aria-label="Main navigation">
            <a className="navbar-brand" href="/">
                <img src="./myl.png" alt="Bootstrap" width="70" height="60"/>
            </a>
            <div className="offcanvas-body p-4 pt-0 p-lg-0">
                <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav justify-content-end">
                    <li className="nav-item col-2 col-lg-auto">
                        <NavLink 
                            className={({isActive}) => `nav-link ${ isActive ? 'nav-link py-2 px-0 px-lg-2 text-warning' : 'nav-link py-2 px-0 px-lg-2'}`}
                            to="/home"
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item col-2 col-lg-auto">
                        <NavLink 
                            className={({isActive}) => `nav-link ${ isActive ? 'nav-link py-2 px-0 px-lg-2 text-warning' : 'nav-link py-2 px-0 px-lg-2'}`}
                            to="/cartas"
                        >
                            Cartas
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
