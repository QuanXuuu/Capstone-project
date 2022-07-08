import {Routes, Route, Outlet} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import dbRecipes from './data/recipes.json';
import {setToLocal, getFromLocal} from './lib/localStorage.js';
import Home from './pages/Home';
import RecipeCreate from './pages/RecipeCreate';
import RecipeDetail from './pages/RecipeDetail';

export default function App() {
  const local = getFromLocal('recipes');

  let localIds = [];
  let recipes = [];

  if (local == null) {
    localIds = [];
  } else if (local.length === 1) {
    localIds = [local.id];
    recipes = [local];
  } else {
    localIds = local.map(l => l.id);
    recipes = [...local];
  }

  dbRecipes.forEach(recipe => {
    const isAvailable = localIds.includes(recipe.id);

    if (!isAvailable) {
      recipes.push(recipe);
    }
  });

  setToLocal('recipes', recipes);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes">
          <Route path="new" element={<RecipeCreate />} />
          <Route path=":id" element={<RecipeDetail />} />
        </Route>
      </Routes>
      <Outlet />
      <Navigation />
    </>
  );
}
