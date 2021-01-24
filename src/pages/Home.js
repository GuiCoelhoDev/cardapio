import { Link } from "react-router-dom"
import { ResumoRecipe } from "../assets/strings"
import Fotos from "../components/Fotos"
import List from "../components/List"
const Home = () => {
    return (
        <div>

            <Fotos/>
            <div>
                {ResumoRecipe}
            </div>
            <List/>


        </div>
    )
}

export default Home;