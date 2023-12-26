import '../../utils/style/footer.css'
import CV from "../../data/cv-djeridi-adel.pdf"




function Footer() {
    return (
      <div className='FooterDiv'>
        <p className='FooterTxt'>Découvrez mon parcours complet en téléchargeant mon CV</p>
        <a href={CV} target="_blank" rel="noopener noreferrer" download={CV} className='Footer_link'>Voir mon CV</a>
        <p className='FooterTxt'>Ou allez voir le reste de mes réalisations!</p>
        <a href='https://github.com/Djeridi-Adel' target="_blank" rel="noopener noreferrer" className='Footer_link'>Mon profil Github</a>
      </div>
        
    )
  }
  
  export default Footer