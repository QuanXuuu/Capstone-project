import {nanoid} from 'nanoid';
import {useState, useEffect} from 'react';
import styled from 'styled-components';

import RecipeForm from '../components/RecipeForm/RecipeForm.js';
import {getFromLocal, setToLocal} from '../lib/localStorage.js';

export default function Home() {
  const [recipes, setRecipes] = useState(getFromLocal('recipes') ?? []);

  useEffect(() => setToLocal('recipes', recipes), [recipes]);

  function addRecipe(recipe) {
    setRecipes([...recipes, {id: nanoid(), name: recipe}]);
  }

  return (
    <Container>
      <Headline>Home Cooking</Headline>
      <RecipeForm onCreateRecipe={addRecipe} />

      <h2>My favorite recipes:</h2>
      <Scroller>
        {recipes.map((recipe, id) => (
          <RecipeItem key={id}>{recipe.name}</RecipeItem>
        ))}
      </Scroller>
    </Container>
  );
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
