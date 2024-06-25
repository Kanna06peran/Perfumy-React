import one from "../assets/images/1.jpeg"
import two from "../assets/images/2.jpeg"
import three from "../assets/images/3.jpeg"



function Product(){return(<div className="Product">
    <center>
    <div className="box">
        <img src={one} alt="one"></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae eum temporibus voluptatem quam qui!</p>
    </div>
  
    <div className="box">
        <img src={two} alt="two"></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae eum temporibus voluptatem quam qui!</p>
    </div>
  
    <div className="box">
        <img src={three} alt="three"></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae eum temporibus voluptatem quam qui!</p>
    </div>
    </center>
  
  
  
  </div>)}


export default Product