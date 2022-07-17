import {useState} from 'react';
import {FaSave} from 'react-icons/fa';
import {MdCancel} from 'react-icons/md';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import IngredientsForm from '../components/IngredientsForm/IngredientsForm';

export default function RecipeEdit({recipes, onEditRecipe}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(recipe => recipe.id === id);

  const [editedRecipe, setEditedRecipe] = useState({...recipe});
  const [ingredients, setIngredients] = useState([...editedRecipe.ingredients]);

  function addIngredients(ingredient) {
    setIngredients([...ingredients, ingredient]);

    setEditedRecipe({
      id: editedRecipe.id,
      name: editedRecipe.name,
      prepTime: editedRecipe.prepTime,
      category: editedRecipe.category,
      ingredients: [...ingredients, ingredient],
      imgURL: editedRecipe.imgURL,
    });
  }

  const editRecipeName = event => {
    setEditedRecipe({
      id: editedRecipe.id,
      name: event.target.value,
      prepTime: editedRecipe.prepTime,
      category: editedRecipe.category,
      ingredients: ingredients,
      imgURL: editedRecipe.imgURL,
    });
  };

  const editRecipePrepTime = event => {
    setEditedRecipe({
      id: editedRecipe.id,
      name: editedRecipe.name,
      prepTime: event.target.value,
      category: editedRecipe.category,
      ingredients: ingredients,
      imgURL: editedRecipe.imgURL,
    });
  };

  const editRecipeCategory = event => {
    setEditedRecipe({
      id: editedRecipe.id,
      name: editedRecipe.name,
      prepTime: editedRecipe.prepTime,
      category: event.target.value,
      ingredients: ingredients,
      imgURL: editedRecipe.imgURL,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const otherRecipes = recipes.filter(recipe => recipe.id !== id);

    onEditRecipe(otherRecipes, {
      id: editedRecipe.id,
      name: editedRecipe.name,
      prepTime: editedRecipe.prepTime,
      category: editedRecipe.category,
      ingredients: ingredients,
      imgURL: editedRecipe.imgURL,
    });

    navigate(`/recipes/${id}`);
  };

  const handleRedirect = () => {
    navigate(`/recipes/${id}`);
  };

  const handleDeleteIngredient = index => {
    setIngredients([...ingredients.filter((_, i) => i !== index)]);
  };

  return (
    <EditForm>
      <EditLabel htmlFor="name">Add name:</EditLabel>
      <input id="name" name="name" autoComplete="off" defaultValue={recipe.name} onChange={editRecipeName} required />
      <EditLabel htmlFor="prepTime">
        Add prepTime<small>(mins)</small>:
      </EditLabel>
      <input
        type="number"
        id="prepTime"
        name="prepTime"
        defaultValue={recipe.prepTime}
        onChange={editRecipePrepTime}
        required
      />
      <EditLabel htmlFor="category">Select category:</EditLabel>
      <EditSelect id="category" name="category" defaultValue={recipe.category} onChange={editRecipeCategory} required>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Fish">Fish</option>
        <option value="Meat">Meat</option>
        <option value="Dessert">Dessert</option>
      </EditSelect>

      <IngredientsForm value={ingredients} onAddIngredients={addIngredients} />

      <Scroller role="list">
        {ingredients.map((ingredient, index) => (
          <IngredientItem key={index}>
            <ButtonDelete type="button" onClick={() => handleDeleteIngredient(index)}>
              <RiDeleteBin5Fill />
            </ButtonDelete>
            {ingredient}
          </IngredientItem>
        ))}
      </Scroller>

      <ButtonWrapper>
        <Button type="button" onClick={handleRedirect}>
          <MdCancel /> Cancel
        </Button>
        <Button type="submit" onClick={handleSubmit}>
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

const ButtonDelete = styled.button`
  background-color: whitesmoke;
  border: none;
  color: inherit;
  margin-right: 0.6rem;
  cursor: pointer;
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
