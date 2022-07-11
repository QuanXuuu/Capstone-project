import {BiCategoryAlt} from 'react-icons/bi';
import {BsClockHistory} from 'react-icons/bs';
import {FiAlignJustify} from 'react-icons/fi';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

export default function RecipeDetail({recipes}) {
  const params = useParams();
  const recipe = recipes.find(recipe => recipe.id === params.id);
  const ingredientItems = recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>);

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
