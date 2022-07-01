import {Routes, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import RecipeCreate from './pages/RecipeCreate';
import RecipeView from './pages/RecipeView';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/new" element={<RecipeCreate />} />
        <Route path="/recipes" element={<RecipeView />} />
      </Routes>
      <Navigation />
    </>
  );
}
