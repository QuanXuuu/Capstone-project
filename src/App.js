import {Routes, Route} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import Home from './pages/Home';
import RecipeCreate from './pages/RecipeCreate';
import RecipeDetail from './pages/RecipeDetail';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new" element={<RecipeCreate />} />
        <Route path=":id" element={<RecipeDetail />} />
      </Routes>
      <Navigation />
    </>
  );
}
