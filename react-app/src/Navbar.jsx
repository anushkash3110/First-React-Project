import { Link } from 'react-router-dom';    

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Mily Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className="create-btn">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;