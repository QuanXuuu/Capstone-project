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
      onAddIngredients(currentIngredient);
      setCurrentIngredient('');
    }
  }

  return (
    <Container>
      <Label htmlFor="ingredientInput">Ingredients</Label>
      <Input
        maxLength={50}
        value={currentIngredient}
        onChange={handleChange}
        id="ingredientInput"
        name="ingredient"
        autoComplete="off"
      />
      <Button onClick={addNewIngredient}>
        <Span>+</Span>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: auto;
`;

const Label = styled.label`
  font-size: 1.2em;
  grid-column: span 2;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  color: inherit;
  /* border-radius: 2px; */
`;

const Button = styled.button`
  background-color: var(--blue);
  border: none;
  border-radius: 5px;
`;

const Span = styled.span`
  font-size: 2rem;
  font-weight: 200;
  color: white;
`;
