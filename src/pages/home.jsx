import Header from "../components/header.jsx"
import Navbara from "../components/navbar.jsx"
import Carrosel from "../components/carousel.jsx"
import Carde from "../components/card.jsx"
import Footer from "../components/footer.jsx"

function Home(){
    return(
        
        <div>
            <Header></Header>
            <Navbara></Navbara>
            
            <Carrosel></Carrosel>
            <div className="card-group">

            <Carde></Carde>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home