
import '../styles/home.css'

const ImageCard = ({source,altText}) =>{
return <div className="image-card">
    <img src={source} alt={altText}/>
</div>
}

export default ImageCard;