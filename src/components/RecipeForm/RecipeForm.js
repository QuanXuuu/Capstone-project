import {nanoid} from 'nanoid';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import IngredientsForm from '../IngredientsForm/IngredientsForm';

export default function RecipeForm({addRecipe}) {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);

  function addIngredients(ingredient) {
    setIngredients([...ingredients, ingredient]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const {name, prepTime, category} = form.elements;
    const recipe = {id: nanoid(), name: name.value, prepTime: prepTime.value, category: category.value, ingredients};
    addRecipe(recipe);
    setIngredients([]);
    navigate('/recipes/' + recipe.id);
  }

  return (
    <CreateForm onSubmit={handleSubmit}>
      <CreateLabel htmlFor="name">Add name:</CreateLabel>
      <input id="name" name="name" autoComplete="off" required />
      <CreateLabel htmlFor="prepTime">
        Add prepTime<small>(mins)</small>:
      </CreateLabel>
      <input type="number" id="prepTime" name="prepTime" required />
      <CreateLabel htmlFor="category">Select category:</CreateLabel>
      <CreateSelect id="category" name="category" defaultValue="" required>
        <option value="" disabled hidden>
          --Please select category--
        </option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Fish">Fish</option>
        <option value="Meat">Meat</option>
        <option value="Dessert">Dessert</option>
      </CreateSelect>

      <IngredientsForm addIngredients={addIngredients} />

      <Scroller role="list">
        {ingredients.map((ingredient, id) => (
          <IngredientItem key={id}>{ingredient}</IngredientItem>
        ))}
      </Scroller>

      <Button type="submit">Submit</Button>
    </CreateForm>
  );
}

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  max-width: 400px;
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
  list-style: none;
`;

const Button = styled.button`
  margin: 20px 0;
`;
