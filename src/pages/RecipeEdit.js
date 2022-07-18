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
      <EditLabel htmlFor="name">Add Name:</EditLabel>
      <Input id="name" name="name" autoComplete="off" defaultValue={recipe.name} onChange={editRecipeName} required />
      <EditLabel htmlFor="prepTime">
        Add PrepTime<small>(mins)</small>:
      </EditLabel>
      <TimeInput
        type="number"
        id="prepTime"
        name="prepTime"
        defaultValue={recipe.prepTime}
        onChange={editRecipePrepTime}
        required
      />
      <EditLabel htmlFor="category">Select Category:</EditLabel>
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
              <RiDeleteBin5Fill id="icon-delete" />
            </ButtonDelete>
            {ingredient}
          </IngredientItem>
        ))}
      </Scroller>

      <ButtonWrapper>
        <Button type="button" onClick={handleRedirect}>
          <MdCancel id="icon-cancel" />
          <TextSpan>Cancel</TextSpan>
        </Button>
        <Button type="submit" onClick={handleSubmit}>
          <FaSave id="icon-save" />
          <TextSpan>Save</TextSpan>
        </Button>
      </ButtonWrapper>
    </EditForm>
  );
}

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 7em auto 0 auto;
  max-width: 400px;
`;

const EditLabel = styled.label`
  font-size: 1.2em;
  grid-column: span 2;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  color: inherit;
  border-radius: 2px;
`;

const TimeInput = styled.input`
  padding: 10px;
  font-size: 1em;
  color: inherit;
  -moz-appearance: textfield;
  border-radius: 2px;
`;

const EditSelect = styled.select`
  font-size: 1em;
  padding: 10px;
  color: inherit;
  margin: 0.2rem 0;
  border-radius: 2px;
`;

const Scroller = styled.ul`
  height: 100%;
  overflow-y: auto;
  margin: 1.2rem 0 0 1.5rem;
  line-height: 1.6rem;
`;

const IngredientItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonDelete = styled.button`
  background-color: whitesmoke;
  border: none;
  color: inherit;
  margin-right: 0.6rem;
  cursor: pointer;

  #icon-delete {
    font-size: 1.2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 2px 25px;
  margin-top: 1.5rem;
  border-radius: 8px;
  color: inherit;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  :active {
    background-color: var(--blue);
    color: white;
  }

  #icon-cancel,
  #icon-save {
    font-size: 2.2rem;
  }
`;

const TextSpan = styled.span`
  font-size: 0.8rem;
`;
