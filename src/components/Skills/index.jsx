import Sass from '../../assets/logo-sass.png';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JS from '../../assets/JavaScript.png';
import LogoReact from '../../assets/logo192.png';
import '../../utils/style/skills.css'


export default function Skills() {
    return (
        <div className='skills_container'>
            <h2>Skills</h2>
            <div className="div_skills">
                <div className="logo_container">
                    <img className='logo_skills' src={HTML} alt='logo HTML'></img>
                    <p className='skills_content'>HTML</p>
                </div>
                <div className="logo_container">
                    <img className='logo_skills' src={CSS} alt='Logo CSS'></img >
                    <p className='skills_content'>CSS</p>
                </div>
                <div className="logo_container">
                    <img className='logo_skills' src={Sass} alt="Logo SASS"></img>
                    <p className='skills_content'>SASS</p>
                </div>
                <div className="logo_container">
                    <img className='logo_skills' src={JS} alt='Logo JavaScript'></img>
                    <p className='skills_content'>JavaScript</p>
                </div>
                <div className="logo_container">
                    <img className='logo_skills' src={LogoReact} alt='Logo React'></img>
                    <p className='skills_content'>React</p>
                </div>
            </div>
        </div>
    )
}