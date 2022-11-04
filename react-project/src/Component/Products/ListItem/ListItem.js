import { useState } from "react";
//import AddToCartIcon from "../../../Assets/Icons"
import Button from "./Button";

const ListItem = ({data})=>{
    let message = useState("Not Added to cart yet")
    console.log("thumbnail",data.thumbnail)
  /*   const [message,setMessage] = useState("Not Added to cart yet")
    const [count,setCount] =useState(1);
    const handleClick = ()=>{
        setCount(count+1);
        setMessage(`Added to cart ${count}`);
        console.log("Clicked", count);
    } */
   
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`../../../Assets/Icons/placeholder.png`}
                alt="some title" />
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹ {data.discountedPrice} </span>

                    <small>
                        <strike>₹ {data.origPrice} </strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
                <small className={"cart-message"}>{message}</small>
            </div>
            <Button></Button>
          {/*   <button className={"cart-add"} onClick={handleClick}>
                <span>Add to Cart</span>
                <img className={"img-fluid"} src="" alt="Cart Icon" />
            </button> */}
        </div>
    )
}

export default ListItem