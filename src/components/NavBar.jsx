import Brand from './Brand';
import MenuButton from './MenuButton';
import CartContainer from './CartContainer';
import { NAVBAR_ROUTES } from '../routes/router';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Brand />
                <MenuButton />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to='/'
                                className={({ isActive, isPending}) => isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link" }>
                                        Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu">
                            { NAVBAR_ROUTES.map((route) => (
                                <li key={route.path} className="dropdown-item">
                                    <NavLink
                                        to={route.path}
                                        className={({ isActive, isPending}) => isPending ? " pending" : isActive ? "nav-link active" : "nav-link" }
                                    >
                                        {route.name}
                                    </NavLink>
                                </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
                {location.pathname !== '/cart' && <CartContainer />}
            </div>
        </nav>
    )
}

export default NavBar