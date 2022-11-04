import ListItem from '../Products/ListItem/ListItem'

const items = [{
    id: 0,
    title: "Item 1",
    discountedPrice: 340,
    origPrice: 500,
    image:"placeholder.png"
},
{
    id: 1,
    title: "Item 2",
    discountedPrice: 420,
    origPrice: 500,
    image:"placeholder.png"
},
{
    id: 2,
    title: "Item 3",
    discountedPrice: 340,
    origPrice: 500,
    image:"placeholder.png"
},
{
    id: 3,
    title: "Item 4",
    discountedPrice: 340,
    origPrice: 500,
    thumbnail:"placeholder.png"
}]
const product = ()=>{
    return(
     
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
        <ListItem data = {items[0]}></ListItem>
        <ListItem data = {items[1]}></ListItem>
        <ListItem data = {items[2]}></ListItem>
        <ListItem data = {items[3]}></ListItem>
        <ListItem data = {items[3]}></ListItem>
        <ListItem data = {items[3]}></ListItem>
       </div>
        </div>
      
    );
}

export default product