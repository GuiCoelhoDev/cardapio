import recipes from "../services/recipes.json"
import { useParams } from 'react-router-dom'

const Recipe = () => {

    // const name = "Crock Pot Roast";
    const params = useParams();
    console.log(params)
    const recipe = recipes.find(item => item.name === params.receita);

    // if (recipe == null) return <p>Não encontrado ‼ </p>
    return (
        <div>
            {
                recipe == null ? <p> Não encontrado </p> :
                    <div>
                        <div>
                            {recipe.name}
                        </div>
                        <div>

                            {recipe.steps}



                        </div>
                    </div>
            }


        </div>
    )
}

export default Recipe;