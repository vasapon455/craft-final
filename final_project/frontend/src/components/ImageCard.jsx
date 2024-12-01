
import '../styles/home.css'

const ImageCard = ({source,altText}) =>{
return <div className="image-card">
    <img src={source} alt={altText} height="100%" width="100%"/>
</div>
}

export default ImageCard;