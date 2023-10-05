import { Link } from "react-router-dom";

const CategoryItem = ({isActive = false, name}) => {
    return (
        <Link to={`/`} className={`nav-link ${isActive ? "active" : null}`} aria-current="page">{name}</Link>
    )
}

export default CategoryItem;