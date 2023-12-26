import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import dataBase from "../../data/data-base.json"
import "../../utils/style/cards.css"


const Card = () => {

  return (
      <div id='gallery_projet' className="gallery">
          <div className="card_wrapper">
            {dataBase.map((record) => {
                const { id, cover, title } = record;
                return (
                  <Link to={{ pathname: "/Projet", search: "?_id="+id }} >
                    <div className="card-projet" key={id}>
                      <img className='card_cover' src={cover} alt={title} />
                      <h3 className='card_cover_title'>{title}</h3>
                    </div>
                  </Link>
                )
            })}
          </div>
      </div>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  cover: '',
}

export default Card