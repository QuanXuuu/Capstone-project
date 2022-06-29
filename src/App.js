import {useState, useEffect} from 'react';
import styled from 'styled-components';

import RecipeForm from './componets/RecipeForm/RecipeForm.js';
import {getFromLocal, setToLocal} from './lib/localStorage.js';

export default function App() {
  const [recipes, setRecipes] = useState(getFromLocal('recipes') ?? []);
  useEffect(() => setToLocal('recipes', recipes), [recipes]);

  return (
    <Container>
      <Headline>Home Cooking</Headline>
      <RecipeForm onCreateRecipe={addRecipe} />

      <h2>My favorite recipes:</h2>
      <Scroller>
        {recipes.map((recipe, index) => (
          <RecipeItem key={index}>{recipe}</RecipeItem>
        ))}
      </Scroller>
    </Container>
  );

  function addRecipe(description) {
    setRecipes([...recipes, description]);
  }
}

const Container = styled.main`
  padding: 30px;
`;

const Headline = styled.h1`
  text-align: center;
`;

const Scroller = styled.ul`
  height: 100%;
  overflow-y: auto;
`;

const RecipeItem = styled.li`
  word-wrap: anywhere;
  list-style: none;
`;
