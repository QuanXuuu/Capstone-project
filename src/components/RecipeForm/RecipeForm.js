import {nanoid} from 'nanoid';
import {useState, useEffect} from 'react';
import styled from 'styled-components';

import {getFromLocal, setToLocal} from '../../lib/localStorage.js';
import IngredientsForm from '../ingredientsForm/IngredientsForm';

export default function RecipeForm() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState(getFromLocal('recipes') ?? []);

  function addIngredients(ingredient) {
    setIngredients([...ingredients, ingredient]);
  }

  function addRecipe(recipe) {
    setRecipes([...recipes, recipe]);
  }

  useEffect(() => setToLocal('recipes', recipes), [recipes]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const {name, prepTime, category} = form.elements;
    const recipe = {id: nanoid(), name: name.value, prepTime: prepTime.value, category: category.value, ingredients};
    addRecipe(recipe);
    setIngredients([]);
    form.reset();
    name.focus();
  }

  return (
    <CreateForm onSubmit={handleSubmit}>
      <CreateLabel htmlFor="name">Add name:</CreateLabel>
      <input id="name" name="name" placeholder="Thai curry soup" />

      <CreateLabel htmlFor="prepTime">
        Add prepTime<small>(mins)</small>:
      </CreateLabel>
      <input type="number" id="prepTime" name="prepTime" placeholder="30" />

      <CreateLabel htmlFor="category">Select category:</CreateLabel>
      <CreateSelect id="category" name="category">
        <option value="vegetarian">Vegetarian</option>
        <option value="fish">Fish</option>
        <option value="meat">Meat</option>
        <option value="dessert">Dessert</option>
      </CreateSelect>

      <br></br>
      <IngredientsForm onAddIngredients={addIngredients} />
      <br></br>
      <Scroller>
        {ingredients.map((ingredient, id) => (
          <IngredientItem key={id}>{ingredient}</IngredientItem>
        ))}
      </Scroller>

      <br></br>
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
  list-style: none;
`;

const Button = styled.button`
  margin: 20px 0;
`;
