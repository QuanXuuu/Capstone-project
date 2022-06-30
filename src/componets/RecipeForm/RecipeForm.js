import styled from 'styled-components';

import ScreenReaderOnly from './ScreenReaderOnly.js';

export default function RecipeForm({onCreateRecipe}) {
  return (
    <Form onSubmit={handleSubmit} aria-labelledby="form-title">
      <Label htmlFor="recipeInput">Add Recipe:</Label>
      <input maxLength={50} id="recipeInput" name="recipe" required />
      <button>
        <ScreenReaderOnly id="form-title">Add new recipe</ScreenReaderOnly>
        <span aria-hidden>+</span>
      </button>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const description = form.elements.recipe.value.trim();

    if (description.length > 0) {
      onCreateRecipe(description);
    }
    form.reset();
  }
}

const Form = styled.form`
  display: grid;
  gap: 6px;
  grid-template-columns: auto 48px;
`;

const Label = styled.label`
  font-size: 1.2em;
  grid-column: span 2;
`;
