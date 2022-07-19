import {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
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
        <AiOutlinePlus id="icon-plus" />
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
  font-size: 1em;
  grid-column: span 2;
  margin-top: 1rem;
  margin-left: 0.3rem;
  color: var(--gray);
`;

const Input = styled.input`
  padding: 10px 5px;
  font-size: 1em;
  color: inherit;
  margin-top: -0.6rem;
  border: none;
  border-bottom: 1px solid var(--gray);

  :focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const Button = styled.button`
  background-color: var(--secondary-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 200;
  color: white;

  #icon-plus {
    margin-top: 0.5rem;
  }
`;
