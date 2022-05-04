import './index.scss';
import {Link,NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => (

    <div className='nav-bar'>
        <Link to='/' className='logo'>
            <img src={LogoS} alt='logo' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>   
            <NavLink exact='true' className='about-link' activeclassname='active' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>   
            <NavLink exact='true' className='contact-link' activeclassname='active' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>   
        </nav>

        <ul>
            <li>
                <a target='_blank' rel='' href='https://www.linkedin.com/in/mfouzan/'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='' href='https://www.github.com/fouzanmohd/'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>

    </div>
     )
export default Sidebar;