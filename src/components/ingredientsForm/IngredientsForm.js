import {useState} from 'react';
import styled from 'styled-components';

export default function IngredientsForm({onAddIngredients}) {
  const [currentIngredient, setCurrentIngredient] = useState('');

  function handleChange(event) {
    const ingredientName = event.target.value;
    setCurrentIngredient(ingredientName);
  }

  function addNewIngredient(event) {
    event.preventDefault();
    onAddIngredients(currentIngredient);
    setCurrentIngredient('');
  }

  return (
    <Container>
      <Label htmlFor="ingredientInput">Add ingredients:</Label>
      <input
        maxLength={50}
        value={currentIngredient}
        onChange={handleChange}
        id="ingredientInput"
        name="ingredient"
        placeholder="300g Toufu"
      />
      <button onClick={addNewIngredient}>
        <span>+</span>
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: 6px;
  grid-template-columns: auto;
`;

const Label = styled.label`
  font-size: 1.2em;
  grid-column: span 2;
`;
