import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import IngredientsForm from '../ingredientsForm/IngredientsForm';

export default function NewRecipeForm() {
  const [ingredients, setIngredients] = useState([]);

  function addIngredients(ingredient) {
    setIngredients([...ingredients, {id: nanoid(), name: ingredient}]);
  }

  return (
    <CreateForm>
      <CreateLabel htmlFor="name">Add name:</CreateLabel>
      <input id="name" name="name" placeholder="Thai curry soup" />

      <CreateLabel htmlFor="prepTime">Add prepTime:</CreateLabel>
      <div>
        <input type="number" id="prepTime" name="prepTime" placeholder="30" />
        <span>mins</span>
      </div>

      <CreateLabel htmlFor="categories">Add categories:</CreateLabel>
      <CreateSelect>
        <option value="vegetarian">Vegetarian</option>
        <option value="fish">Fish</option>
        <option value="meat">Meat</option>
        <option value="dessert">Dessert</option>
      </CreateSelect>

      <br></br>
      <IngredientsForm onAddIngredients={addIngredients} />

      <Scroller>
        {ingredients.map((ingredient, id) => (
          <IngredientItem key={id}>{ingredient.name}</IngredientItem>
        ))}
      </Scroller>

      <Button type="submit">Submit</Button>
    </CreateForm>
  );
}

const CreateForm = styled.form`
  display: grid;
  gap: 6px;
  grid-template-columns: auto;
`;

const CreateLabel = styled.label`
  font-size: 1.2em;
  grid-column: span 2;
`;

const CreateSelect = styled.select`
  font-size: 1em;
`;

const Scroller = styled.ul`
  height: 100%;
  overflow-y: auto;
`;

const IngredientItem = styled.li`
  word-wrap: anywhere;
  list-style: none;
`;

const Button = styled.button`
  margin: 20px 0;
`;
