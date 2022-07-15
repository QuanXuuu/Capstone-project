import {FaSave} from 'react-icons/fa';
import {MdCancel} from 'react-icons/md';
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import IngredientsForm from '../components/IngredientsForm/IngredientsForm';

export default function RecipeEdit({recipes, editRecipe}) {
  const {id} = useParams();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/recipes/${id}`);
  };

  //   const recipe = recipes.find(recipe => recipe.id === id);

  console.log(editRecipe);

  const handleChange = event => {
    event.preventDefault();
    console.log(editRecipe);
    console.log(event.target.value);
    editRecipe.name = event.target.value;
    console.log(editRecipe);
  };

  return (
    <EditForm>
      <EditLabel htmlFor="name">Add name:</EditLabel>
      <input id="name" name="name" autoComplete="off" value={editRecipe.name} onChange={handleChange} required />
      <EditLabel htmlFor="prepTime">
        Add prepTime<small>(mins)</small>:
      </EditLabel>
      <input type="number" id="prepTime" name="prepTime" value={editRecipe.prepTime} required />
      <EditLabel htmlFor="category">Select category:</EditLabel>
      <EditSelect id="category" name="category" defaultValue="" value={editRecipe.category} required>
        <option value="" disabled hidden>
          --Please select category--
        </option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Fish">Fish</option>
        <option value="Meat">Meat</option>
        <option value="Dessert">Dessert</option>
      </EditSelect>

      <IngredientsForm value={editRecipe.ingredients} />

      <Scroller role="list">
        {editRecipe.ingredients.map((ingredient, index) => (
          <IngredientItem key={index}>{ingredient}</IngredientItem>
        ))}
      </Scroller>

      <ButtonWrapper>
        <Button type="button" onClick={handleRedirect}>
          <MdCancel /> Cancel
        </Button>
        <Button type="submit">
          <FaSave /> Save
        </Button>
      </ButtonWrapper>
    </EditForm>
  );
}

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  max-width: 400px;
`;

const EditLabel = styled.label`
  font-size: 1.2em;
  grid-column: span 2;
`;

const EditSelect = styled.select`
  font-size: 1em;
`;

const Scroller = styled.ul`
  height: 100%;
  overflow-y: auto;
`;

const IngredientItem = styled.li`
  list-style: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  margin: 1.5rem 3rem;
  border: 1px solid var(--lightcyan);
  border-radius: 8px;
  color: inherit;
  background-color: whitesmoke;
  font-size: 1.2rem;
  cursor: pointer;

  :active {
    background-color: var(--blue);
    color: white;
  }
`;
