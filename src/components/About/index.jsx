import  "../../utils/style/about.css"
import Loupe from '../../assets/loupe.png'

export default function About() {
    return (
        <div id="about" className="about_container">
            <div className="about_title_div">
                <div className="loupe loupe-title">
                    <h2 className="about_title">Hello! Moi c'est Adel!</h2>
                    <img src={Loupe} alt="loupe" className="img_loupe"></img>
                </div>
                <div className="div_p_title">
                    <p className="p_title">Autodidacte dans le domaine de l'informatique, passionné par le développement web et conforté dans l'idée d'un profond intérêt à réaliser des interfaces dynamiques, assurer une bonne expérience utilisateur sur les plateformes, j'ai décidé de réaliser une formation intensive en ligne durant 9 mois avec Openclassrooms, pour développer mes compétences dans ce secteur.</p>
                </div>
            </div>
            <div className="about_info">
                <div className="about_info_div_1">
                    <div className="loupe">
                        <h3 >Formation</h3>
                        <img src={Loupe} alt="loupe" className="img_loupe"></img>
                    </div>
                    <div className="div_p">
                        <p className="p_about_info">Grâce à cet enseignement qui mêle la théorie à la pratique avec de nombreux cas concrets à réaliser, faisant appel à la patience, au sens de l'organisation et à la rigueur, je suis désormais prêt à participer à de nouveaux projets, apprendre de nouveaux outils et à m'inspirer de la créativité de vos collaborateurs.</p>
                    </div>
                </div>

                <div className="about_info_div_2">
                    <div className="loupe">
                        <h3 >En savoir plus</h3>
                        <img src={Loupe} alt="loupe" className="img_loupe"></img>
                    </div>
                    <div className="div_p">
                        <p className="p_about_info">Si vous souhaitez en savoir plus, n'hésitez pas à vous laisser transporter dans mon univers et à parcourir mon portfolio pour découvrir quelques-unes de mes réalisations.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}