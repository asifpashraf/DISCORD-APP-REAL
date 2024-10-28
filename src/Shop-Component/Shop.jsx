
import Nav from "./nav"
import Dojo from "./Dojo"
import Champions from "./Champions"
import Spongebob from "./Spongebob"
import Galaxy from "./Galaxy"
import Anime from "./Anime"
import Lofi from "./Lofi"
import './shop-style.css'
import Dark from "./Dark"
import Fantasy from "./Fantasy"

function Shop() {

  return (
   <div className="shop-main">
     <div className="shop">
     <Nav/>

    <div className="cardpage">
     
     <Dojo/>
     <Champions/>
     <Spongebob/> 
     <Dark />
     <Galaxy/>
     <Anime/>
     <Lofi/> 
     <Fantasy/>
     </div>
     </div>
   </div>
   
  )
}

export default Shop
