import './Header.module.css';
import { Link } from 'react-router-dom';
import { APP_PATHS, HOME_PATHS } from '../../utils/paths';

function Header() {
    return (
        <header>
            <Link to={APP_PATHS.HOME}>Emerick</Link>
            <nav>
                <ul>
                    <li><Link to={HOME_PATHS.HOME}>Accueil</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;