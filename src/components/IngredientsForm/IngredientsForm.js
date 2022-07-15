import {useState} from 'react';
import styled from 'styled-components';

export default function IngredientsForm({onAddIngredients}) {
  const [currentIngredient, setCurrentIngredient] = useState('');

  function handleChange(event) {
    const ingredientName = event.target.value;

    if (ingredientName.length > 0) {
      setCurrentIngredient(ingredientName);
    }
  }

  function addNewIngredient(event) {
    event.preventDefault();

    if (currentIngredient.length > 0) {
      console.log(currentIngredient);
      onAddIngredients(currentIngredient);
      setCurrentIngredient('');
    }
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
        autoComplete="off"
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
