import {nanoid} from 'nanoid';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import IngredientsForm from '../IngredientsForm/IngredientsForm';

export default function RecipeForm({onAddRecipe}) {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);

  function addIngredients(ingredient) {
    setIngredients([...ingredients, ingredient]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const {name, prepTime, category, imgURL} = form.elements;
    const recipe = {
      id: nanoid(),
      name: name.value,
      prepTime: prepTime.value,
      category: category.value,
      ingredients,
      imgURL: imgURL.value,
    };
    onAddRecipe(recipe);
    setIngredients([]);
    navigate('/recipes/' + recipe.id);
  }

  return (
    <CreateForm onSubmit={handleSubmit}>
      <CreateLabel htmlFor="name">Name</CreateLabel>
      <Input id="name" name="name" autoComplete="off" required />
      <CreateLabel htmlFor="prepTime">
        PrepTime<small>(mins)</small>
      </CreateLabel>

      <TimeInput type="number" id="prepTime" name="prepTime" required />

      <CreateLabel htmlFor="imgURL">Image URL</CreateLabel>
      <Input id="imgURL" name="imgURL" autoComplete="off" required />
      <CreateLabel htmlFor="category">Category</CreateLabel>
      <CreateSelect id="category" name="category" defaultValue="" required>
        <option value="" disabled hidden>
          --Please select category--
        </option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Fish">Fish</option>
        <option value="Meat">Meat</option>
        <option value="Dessert">Dessert</option>
      </CreateSelect>

      <IngredientsForm onAddIngredients={addIngredients} />

      <Scroller role="list">
        {ingredients.map((ingredient, index) => (
          <IngredientItem key={index}>{ingredient}</IngredientItem>
        ))}
      </Scroller>

      <Button type="submit">
        <ButtonSpan>Submit</ButtonSpan>
      </Button>
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

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  color: inherit;
  /* border-radius: 2px; */
`;

const TimeInput = styled.input`
  padding: 10px;
  font-size: 1em;
  color: inherit;
  -moz-appearance: textfield;
  /* border-radius: 2px; */
`;

const CreateSelect = styled.select`
  font-size: 1em;
  padding: 10px;
  color: inherit;
  margin: 0.2rem 0;
  /* border-radius: 2px; */
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
  padding: 10px;
  background-color: var(--blue);
  border: none;
  border-radius: 5px;
`;

const ButtonSpan = styled.span`
  font-size: 1.2rem;
  color: white;
`;
