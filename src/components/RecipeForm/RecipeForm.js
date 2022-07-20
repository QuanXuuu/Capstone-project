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
        Prep Time<small>(mins)</small>
      </CreateLabel>

      <TimeInput type="number" id="prepTime" name="prepTime" autoComplete="off" required />

      <CreateLabel htmlFor="imgURL">Image URL</CreateLabel>
      <Input id="imgURL" name="imgURL" autoComplete="off" required />

      <CreateLabel htmlFor="category">Category</CreateLabel>
      <CreateSelect id="category" name="category" defaultValue="" required>
        <option value="" disabled hidden id="default-text"></option>
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
  max-width: 350px;
`;

const CreateLabel = styled.label`
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
    border-color: var(--tertiary-color);
  }
`;

const TimeInput = styled.input`
  padding: 10px 5px;
  font-size: 1em;
  color: inherit;

  /* eslint-disable-next-line */
  -moz-appearance: textfield;
  margin-top: -0.6rem;
  border: none;
  border-bottom: 1px solid var(--gray);

  :focus {
    outline: none;
    border-color: var(--tertiary-color);
  }
`;

const CreateSelect = styled.select`
  font-size: 1em;
  padding: 10px 2px;
  color: inherit;
  margin: 0.2rem 0;
  margin-top: -0.6rem;
  background-color: var(--white);
  border: none;
  border-bottom: 1px solid var(--gray);

  :focus {
    outline: none;
    border-color: var(--tertiary-color);
  }
`;

const Scroller = styled.ul`
  height: 100%;
  overflow-y: auto;
  margin: 1.2rem 0 0 1.5rem;
  line-height: 1.6rem;
`;

const IngredientItem = styled.li`
  list-style: none;
`;

const Button = styled.button`
  margin: 20px 0;
  padding: 10px;
  background-color: var(--primary-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonSpan = styled.span`
  font-size: 1.2rem;
  color: white;
`;
