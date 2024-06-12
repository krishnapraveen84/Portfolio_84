import './index.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="nav-bar">
            <p className='logo-name'>Portfolio</p>
            <div className='routes-div'>
                <Link to='/' className='link'><p className='route-name'>Home</p></Link>
                <Link to='/skills' className='link'><p className='route-name'>Skills</p></Link>
                <Link to='/projects' className='link'><p className='route-name'>Projects</p></Link>
            </div>
        </nav>
    )
};

export default NavBar;