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
      <EditLabel htmlFor="name">Name</EditLabel>
      <Input id="name" name="name" autoComplete="off" defaultValue={recipe.name} onChange={editRecipeName} required />
      <EditLabel htmlFor="prepTime">
        Prep Time<small>(mins)</small>
      </EditLabel>
      <TimeInput
        type="number"
        id="prepTime"
        name="prepTime"
        defaultValue={recipe.prepTime}
        onChange={editRecipePrepTime}
        required
      />
      <EditLabel htmlFor="imgURL">Image URL</EditLabel>
      <URLInput
        type="textarea"
        id="imgURL"
        name="imgURL"
        autoComplete="off"
        defaultValue={recipe.imgURL}
        onChange={editRecipeName}
        required
      />
      <EditLabel htmlFor="category">Category</EditLabel>
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
            <IconButtonDelete type="button" onClick={() => handleDeleteIngredient(index)}>
              <RiDeleteBin5Fill id="icon-delete" />
            </IconButtonDelete>
            {ingredient}
          </IngredientItem>
        ))}
      </Scroller>

      <ButtonContainer>
        <ButtonWrapper>
          <Button type="button" onClick={handleRedirect}>
            <MdCancel id="icon-cancel" />
            <ButtonTextSpan>Cancel</ButtonTextSpan>
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button type="submit" onClick={handleSubmit}>
            <FaSave id="icon-update" />
            <ButtonTextSpan>Save</ButtonTextSpan>
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
    </EditForm>
  );
}

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 7em auto 0 auto;
  max-width: 350px;
`;

const EditLabel = styled.label`
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
  border-bottom: 1px solid gray;

  :focus {
    outline: none;
    border-color: var(--tertiary-color);
  }
`;

const TimeInput = styled.input`
  padding: 10px 5px;
  font-size: 1em;
  color: inherit;
  /* stylelint-disable */
  -moz-appearance: textfield;
  /* stylelint-disable */
  margin-top: -0.6rem;
  border: none;
  border-bottom: 1px solid gray;

  :focus {
    outline: none;
    border-color: var(--tertiary-color);
  }
`;

const URLInput = styled.input`
  padding: 10px 5px;
  font-size: 1em;
  color: inherit;
  overflow-wrap: break-word;
  margin-top: -0.6rem;
  border: none;
  border-bottom: 1px solid gray;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  :focus {
    outline: none;
    border-color: var(--tertiary-color);
  }
`;

const EditSelect = styled.select`
  font-size: 1em;
  padding: 10px 2px;
  color: inherit;
  margin: 0.2rem 0;
  margin-top: -0.6rem;
  background-color: white;
  border: none;
  border-bottom: 1px solid gray;

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
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const IconButtonDelete = styled.button`
  background-color: var(--bgcolor);
  border: none;
  color: var(--secondary-color);
  margin-right: 0.6rem;
  cursor: pointer;

  #icon-delete {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonWrapper = styled.div`
  width: 110px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 2.5rem 0;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  #icon-cancel,
  #icon-update {
    font-size: 1.2rem;
    color: white;
  }
`;

const ButtonTextSpan = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  font-weight: 300;
`;
