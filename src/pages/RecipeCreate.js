//import {useState} from 'react';
import styled from 'styled-components';

import RecipeForm from '../components/RecipeForm/RecipeForm.js';

export default function RecipeCreate() {
  // const [newrecipes, setNewRecipes] = useState([]);
  // const [recipes, setRecipes] = useState([]);

  // function addRecipes(recipe) {
  //   setRecipes([...recipes, recipe]);
  // }

  // function addNewRecipes(newRecipe) {
  //   setNewRecipes([...newrecipes, newRecipe]);
  // }

  return (
    <Container>
      <Headline>New Recipe</Headline>
      <RecipeForm />
    </Container>
  );
}

const Container = styled.main`
  padding: 1rem;
`;

const Headline = styled.h1`
  text-align: center;
`;
