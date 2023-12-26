import "../../utils/style/carousel.css"

function Carousel({pictures,}) {

    return(
        <div className="carousel">
            <div className='div-image'>
                <img src={pictures} className='classImage' alt="" />
            </div>
        </div>
    )

}

export default Carousel