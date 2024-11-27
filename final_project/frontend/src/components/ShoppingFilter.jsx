import { Button } from "react-bootstrap"

const ShoppingFilter = ({name})=>{
    return <Button className="filter-button "><p className="caption black">{name}</p></Button>
}

export default ShoppingFilter