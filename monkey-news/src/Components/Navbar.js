import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Monkey News</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Country
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/india">India</Link></li>
                                <li><Link className="dropdown-item" to="/russia">Russia</Link></li>
                                <li><Link className="dropdown-item" to="/japan">Japan</Link></li>
                                <li><Link className="dropdown-item" to="/hongkong">Hong-Kong</Link></li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/top-headlines">Top Headline</Link></li>
                                <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
