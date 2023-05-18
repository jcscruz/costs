import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar(){
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt='Costs'></img>
                </Link>
                <ul>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <ul>
                    <li className={styles.item}>
                        <Link to='/projects'>Projetos</Link>
                    </li>
                </ul>
                <ul>
                    <li className={styles.item}>
                        <Link to='/company'>Empresa</Link>
                    </li>
                </ul>
                <ul>
                    <li className={styles.item}>
                        <Link to='/contact'>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar
