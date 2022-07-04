import {useState} from 'react';
import styled from 'styled-components';

export default function IngredientsForm({onAddIngredients}) {
  function handleInput(event) {
    event.preventDefault();
    const form = event.target;

    updateIngredient('test');

    const ingredientName = form.elements.ingredient.value.trim();

    if (ingredientName.length > 0) {
      onAddIngredients(ingredientName);
    }
    form.reset();
    form.focus();
  }

  const [currentIngredient, updateIngredient] = useState('');

  return (
    <Form>
      <Label htmlFor="ingredientInput">Add ingredients:</Label>
      <input
        maxLength={50}
        value={currentIngredient}
        onChange={handleInput}
        id="ingredientInput"
        name="ingredient"
        placeholder="300g Toufu"
      />
      <button>
        <span>+</span>
      </button>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 6px;
  grid-template-columns: auto;
`;

const Label = styled.label`
  font-size: 1.2em;
  grid-column: span 2;
`;
