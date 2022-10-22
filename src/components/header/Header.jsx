import './header.style.css'
import { Link } from 'react-router-dom'

export const Header = ()=> {
    return(
        <nav className="navbar">
            <span>Hola</span> 
            <ul className='navbar--list'>
                <li>
                    <Link to='/'>Card</Link>
                </li>
                <li>
                    <Link to='/lauta'>Card animada</Link>
                </li>
            </ul>
        </nav>
    )
}