import "../../utils/style/form.css"
import Gmail from "../../assets/gmail.png"
import Localisation  from "../../assets/localisation.png"

export default function Form() {
    return (
      <div id="contact" className="container">
        <h2 className="form_title">Mes coordonnées</h2>
        <div className="form_mail">
          <a className="form_mail" rel="noreferrer" href="mailto:djeridi.adel@gmail.com" target="_blank">
            <img className="hero_logo" src={Gmail} alt="Logo Gmail" />
            <p>Envoyer un email</p>
          </a>
        </div>
        <div className="maps">
          <img src={Localisation} alt="logo localisation" className="localisation"></img>
          <p>26100 Romans-Sur-Isère</p>
        </div>
       
      </div>
       
    )
}