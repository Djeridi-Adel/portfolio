import Carousel from '../../components/Carousel'
import Home from "../Home"
import Arrow from '../../assets/arrow-left.png'
import dataBase from '../../data/data-base.json'
import "../../utils/style/projet.css"
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'






function Projet() {

    const [searchParams] = useSearchParams();
    const [idProjet] = useState(searchParams.get('_id'));

    const record = dataBase.find(element => element.id === idProjet)

    if (!record) return(<Home />)

    return (
        <div>
            <div className='projet'>
                <NavLink to="gallery_projet"><img src={Arrow} alt='flèche retour' className='arrow' /></NavLink>
                <Carousel pictures={record.pictures} />
                <div className='fiche_projet'>
                    <div className="div_projet">
                        <p>
                            <span className='projet_title'>Client:</span>
                            <br></br>
                            <br></br>
                            <span className='projet_text'>{record.client}</span>
                        </p>
                    </div>
                    <div className='div_projet'>
                        <p>
                            <span className='projet_title'>Description:</span>
                            <br></br>
                            <br></br>
                            <span className='projet_text'> {record.description}</span>
                        </p>
                    </div>
                    <div className='div_projet'>
                        <p>
                            <span className='projet_title'>Objectifs:</span>
                            <br></br>
                            <br></br>
                            <span className='projet_text'>{record.objectifs}</span>
                        </p>
                    </div>
                    <div className='div_link'>
                        {record.site.length > 0 &&
                        <a rel="noreferrer" href={record.site} target="_blank" className='projet_link '>Lien vers le site</a>
                        }
                        <a rel="noreferrer" href={record.depot} target="_blank" className='projet_link'>Lien Github</a>

                    </div>
                    <div className='div-description'>
                        <div className='div-tags'>
                            { record.tags.map((element, index) => {
                            return(<p className='tags' key={"tags-"+index}>{element}</p>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projet
