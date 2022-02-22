import './Topbar.css'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router} from "react-router-dom";
const Faskdjf = () => {
    return (
        <Router>

        <div className="Faskdjf">
            <a className='Faskdjf__logo'>CV GENERATOR</a>
            <div className="Faskdjf__right">
                <Link to="#home">HOME</Link>
                <Link to="#services">SERVICES</Link>
                <Link to="#contact">CONTACT</Link>
                <Link to="#about">ABOUT</Link>
            </div>
        </div>
        </Router>
    )
}

export default Faskdjf
