import {useState} from 'react';
import {AiTwotoneDelete} from 'react-icons/ai';
import {BiCategoryAlt} from 'react-icons/bi';
import {BsClockHistory} from 'react-icons/bs';
import {FiAlignJustify} from 'react-icons/fi';
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import Dialogue from '../components/Dialogue/Dialogue';

export default function RecipeDetail({recipes, onDeleteRecipe}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(recipe => recipe.id === id);
  const ingredientItems = recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>);

  const [isDialogueShown, setIsDialogueShown] = useState(false);

  const toggleDialogue = () => {
    setIsDialogueShown(!isDialogueShown);
  };

  const handleDelete = () => {
    onDeleteRecipe(id);
    navigate('/');
  };

  return (
    <DetailCard>
      <DetailHeader>{recipe.name}</DetailHeader>
      <DetailImage src={recipe.imgURL} alt={`Picture of a ${recipe.name}`} />
      <p>
        <BsClockHistory /> PrepTime: {recipe.prepTime}
        <small>mins</small>
      </p>
      <p>
        <BiCategoryAlt /> Category: {recipe.category}
      </p>
      <DetailIngredientsList>
        <FiAlignJustify /> Ingredients:
      </DetailIngredientsList>
      <ul>{ingredientItems}</ul>

      <ButtonDelete onClick={toggleDialogue}>
        <AiTwotoneDelete /> Delete
      </ButtonDelete>

      {isDialogueShown && <Dialogue onHandleDelete={handleDelete} onHideDialogue={toggleDialogue} />}
    </DetailCard>
  );
}

const DetailCard = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  margin: 0 auto;
  box-shadow: 1rem 0.5rem 1rem #e6e6e6;
  max-width: 320px;
`;

const DetailHeader = styled.h1`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
`;

const DetailIngredientsList = styled.h2`
  font-weight: lighter;
  font-size: 1.2rem;
`;

const DetailImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  margin-top: 20px;
`;

const ButtonDelete = styled.button`
  padding: 10px 20px;
  margin: 1rem 5rem;
  border: 1px solid var(--blue);
  border-radius: 8px;
  color: inherit;
  background-color: var(--lightcyan);
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;

  :active {
    background-color: var(--blue);
    color: white;
  }
`;
