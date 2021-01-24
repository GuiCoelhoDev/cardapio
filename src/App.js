import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Recipe from "./pages/Recipe"
function App() {
  return (
    //BrowserRouter => precisa por exact
    //Switch => não precisa
    <BrowserRouter>

      <Route path="/">
        <Navbar />
      </Route>
      <Route exact path="/home">
        <Home />  
      </Route>
      <Route path="/about">
        <About/>
      </Route>

      <Route path="/receitas/:receita">
        <Recipe/>
      </Route>

    </BrowserRouter>
  );
}

export default App;
