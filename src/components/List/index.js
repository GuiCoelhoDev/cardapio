import { Link } from "react-router-dom"
import recipes from "../../services/recipes.json"
import "./styles.css"
const List = () => {
    return (
        <ul>
            {recipes.map(recipe => {
                return (
                    <li key={recipe.name}>
                        <Link to={"/receitas/" + recipe.name}>{recipe.name}</Link>

                    </li>
                )

            })}
        </ul>
    )

}

export default List;