import {Routes, Route} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import Home from './pages/Home';
import RecipeCreate from './pages/RecipeCreate';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/new" element={<RecipeCreate />} />
      </Routes>
      <Navigation />
    </>
  );
}
