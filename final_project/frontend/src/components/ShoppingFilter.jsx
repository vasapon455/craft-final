import { Button } from "react-bootstrap"
import { useProducts } from "../contexts/ProductProvider"


const ShoppingFilter = ({name, onClicked,})=>{
    return <Button className="filter-button " onClick={()=>onClicked(name)}><p className="caption black">{name}</p></Button>
}

export default ShoppingFilter