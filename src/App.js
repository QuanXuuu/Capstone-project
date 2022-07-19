import {useState, useEffect} from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import dbRecipes from './data/recipes.json';
import {setToLocal, getFromLocal} from './lib/localStorage.js';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import RecipeCreate from './pages/RecipeCreate';
import RecipeDetail from './pages/RecipeDetail';
import RecipeEdit from './pages/RecipeEdit.js';

export default function App() {
  const [recipes, setRecipes] = useState(getFromLocal('recipes') ?? dbRecipes);

  function addRecipe(recipe) {
    setRecipes([...recipes, recipe]);
  }

  function editRecipe(otherRecipes, editedRecipe) {
    setRecipes([...otherRecipes, editedRecipe]);
  }

  function deleteRecipe(recipeId) {
    setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
  }

  useEffect(() => setToLocal('recipes', recipes), [recipes]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recipes">
          <Route path="" element={<Home recipes={recipes} />} />
          <Route path="new" element={<RecipeCreate onAddRecipe={addRecipe} />} />
          <Route path=":id" element={<RecipeDetail recipes={recipes} onDeleteRecipe={deleteRecipe} />} />
          <Route path=":id/edit" element={<RecipeEdit recipes={recipes} onEditRecipe={editRecipe} />} />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
}
