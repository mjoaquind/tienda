import Brand from './Brand';
import MenuButton from './MenuButton';
import CartContainer from './CartContainer';
import { NAVBAR_ROUTES } from '../routes/router';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Brand />
                <MenuButton />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        { NAVBAR_ROUTES.map((route) => (
                            <li key={route.path} className="nav-item">
                                <NavLink
                                    to={route.path}
                                    className={({ isActive, isPending}) => isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link" }
                                >
                                    {route.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                {location.pathname !== '/cart' && <CartContainer />}
            </div>
        </nav>
    )
}

export default NavBar