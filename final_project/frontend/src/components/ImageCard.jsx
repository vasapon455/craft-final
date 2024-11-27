
import '../styles/image-card.css'

const ImageCard = ({source,altText}) =>{
return <div className="image-card">
    <img src={source} alt={altText}/>
</div>
}

export default ImageCard;