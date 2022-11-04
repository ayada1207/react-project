import { useState } from "react";

const Button = ()=>{
    const [message,setMessage] = useState("Not Added to cart yet")
    const [count,setCount] =useState(0);
    const handleClick = ()=>{
        setCount(count+1);
        setMessage(`Added to cart ${count}`);
        console.log("Clicked", count);
    }
    const handleClickPlus = ()=>{
        setCount(count+1);
    }
    const handleClickMinus = ()=>{
        setCount(count-1);
    }
    if(count>0){
    return (
        <div className="cart-addon">
             <button className={"cart-add"} onClick={handleClickPlus}>
                <span> + </span>
            </button>
            <span className="counter">{count}</span>
            <button className={"cart-add"} onClick={handleClickMinus}>
                <span> - </span>
            </button>
        </div>
    )
    }
    else {
    return (
        <div>
             <button className={"cart-add"} onClick={handleClick}>
                <span>+</span>
                <img className={"img-fluid"} src="" alt="Cart Icon" />
            </button>
            <span>{count}</span>
            <button className={"cart-add"} onClick={handleClick}>
                <span>+</span>
                <img className={"img-fluid"} src="" alt="Cart Icon" />
            </button>
        </div>
    )
}
}

export default Button