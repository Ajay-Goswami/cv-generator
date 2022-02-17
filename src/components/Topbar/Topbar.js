import './Topbar.css'
const Header = () => {
    return (
        <div className="header">
            <a className='header__logo'>CV GENERATOR</a>
            <div className="header__right">
                <a href="#home">HOME</a>
                <a href="#services">SERVICES</a>
                <a href="#contact">CONTACT</a>
                <a href="#about">ABOUT</a>
            </div>
        </div>
    )
}

export default Header
