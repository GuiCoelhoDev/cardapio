import { Link } from "react-router-dom"
import { ResumoRecipe } from "../assets/strings"
import Fotos from "../components/Fotos"

const Home = () => {
    return (
        <div>

            <Fotos/>
            <div>
                {ResumoRecipe}
            </div>

        </div>
    )
}

export default Home;