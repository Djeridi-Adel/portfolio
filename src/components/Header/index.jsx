import "../../utils/style/header.css"
import Logo from "../../assets/logo2.jpg"
import Gmail from "../../assets/gmail.png"
import Github from "../../assets/github.png"
import { useState } from "react"

export default function Header() {   

    const [ fix, setFix ] = useState(false)

    function setFixed() {
        if (window.scrollY > 0) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)

    return (
    
        <div className="header_container" >
            <nav className={fix ? 'navBar scrolled' : 'navBar'}>
                <a href="#accueil"><img className='navBar_Logo' src={Logo} alt='Logo Djeridi Adel'/></a>
                <div className="link_div">
                <a href="#about" className={fix ? 'link-scrolled' : 'link'}>À propos</a>
                <a href="#gallery_projet" className={fix ? 'link-scrolled' : 'link'}>Mes projets</a>
                <a href="#contact"className={fix ? 'link-scrolled' : 'link'}>Contact</a>
                </div>
            </nav>
            <div id="accueil" className="hero-image">
                <div className="hero-text">
                    <h1>Développeur web</h1>
                </div>
                <div className="hero_logo_div">
                    <a rel="noreferrer" href="https://github.com/Djeridi-Adel" target="_blank"><img className="hero_logo" src={Github} alt="Logo Github" /></a>
                    <a rel="noreferrer" href="mailto:djeridi.adel@gmail.com" target="_blank"><img className="hero_logo" src={Gmail} alt="Logo Gmail" /></a>
                </div>
            </div>
        </div>
    )
}

