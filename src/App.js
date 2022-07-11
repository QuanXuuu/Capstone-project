import {useState, useEffect} from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import dbRecipes from './data/recipes.json';
import {setToLocal, getFromLocal} from './lib/localStorage.js';
import Home from './pages/Home';
import RecipeCreate from './pages/RecipeCreate';
import RecipeDetail from './pages/RecipeDetail';

export default function App() {
  const [recipes, setRecipes] = useState(getFromLocal('recipes') ?? dbRecipes);

  function addRecipe(recipe) {
    setRecipes([...recipes, recipe]);
  }

  useEffect(() => setToLocal('recipes', recipes), [recipes]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/recipes">
          <Route path="new" element={<RecipeCreate onAddRecipe={addRecipe} />} />
          <Route path=":id" element={<RecipeDetail recipes={recipes} />} />
        </Route>
      </Routes>
      <Outlet />
      <Navigation />
    </>
  );
}
