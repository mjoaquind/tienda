import Brand from './Brand';
import MenuButton from './MenuButton';
import CategoryItem from './CategoryItem';
import CartContainer from './CartContainer';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Brand />
                <MenuButton />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <CategoryItem isActive={true} name="Inicio" />
                    </li>
                    <li className="nav-item">
                        <CategoryItem isActive={false} name="Productos" />
                    </li>
                    <li className="nav-item">
                        <CategoryItem isActive={false} name="Sale" />
                    </li>
                    </ul>
                </div>
                <CartContainer />
            </div>
        </nav>
    )
}

export default NavBar