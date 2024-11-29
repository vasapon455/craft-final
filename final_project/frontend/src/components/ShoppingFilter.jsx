import { Button } from "react-bootstrap"
import { useProducts } from "../contexts/ProductProvider"

const ShoppingFilter = ({name})=>{
    return <Button className="filter-button "><p className="caption black">{name}</p></Button>
}

export default ShoppingFilter