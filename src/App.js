import {useState, useEffect} from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import dbRecipes from './data/recipes.json';
import {setToLocal, getFromLocal} from './lib/localStorage.js';
import Home from './pages/Home';
import RecipeCreate from './pages/RecipeCreate';
import RecipeDetail from './pages/RecipeDetail';
import RecipeEdit from './pages/RecipeEdit.js';

export default function App() {
  const [recipes, setRecipes] = useState(getFromLocal('recipes') ?? dbRecipes);
  const [editRecipe, setEditRecipe] = useState();

  function addRecipe(recipe) {
    setRecipes([...recipes, recipe]);
  }

  function deleteRecipe(recipeId) {
    setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
  }

  function copyRecipe(recipe) {
    setEditRecipe(recipe);
  }

  useEffect(() => setToLocal('recipes', recipes), [recipes]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/recipes">
          <Route path="new" element={<RecipeCreate onAddRecipe={addRecipe} />} />
          <Route
            path=":id"
            element={<RecipeDetail recipes={recipes} onDeleteRecipe={deleteRecipe} onEditRecipe={copyRecipe} />}
          />
          <Route path=":id/edit" element={<RecipeEdit recipes={recipes} editRecipe={editRecipe} />} />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
}
