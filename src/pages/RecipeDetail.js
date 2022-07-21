import {useState} from 'react';
import {AiTwotoneEdit} from 'react-icons/ai';
import {BiCategoryAlt} from 'react-icons/bi';
import {BsClockHistory} from 'react-icons/bs';
import {RiDeleteBin5Fill} from 'react-icons/ri';
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
    navigate('/recipes');
  };

  const handleRedirect = () => {
    navigate(`/recipes/${id}/edit`);
  };

  return (
    <div>
      <DetailName>{recipe.name}</DetailName>

      <DetailContainer>
        <div>
          <DetailImageContainer>
            <DetailImage src={recipe.imgURL} alt={`Picture of a ${recipe.name}`} />
          </DetailImageContainer>
        </div>

        <DetailTextContainer>
          <DetailSubTitleContainer>
            <TimeContainer>
              <BsClockHistory id="icon-time" /> <TimeSpan> {recipe.prepTime}mins</TimeSpan>
            </TimeContainer>
            <CategoryContainer>
              <BiCategoryAlt id="icon-category" /> <CategorySpan> {recipe.category}</CategorySpan>
            </CategoryContainer>
          </DetailSubTitleContainer>

          <IngredientContainer>
            <IngredientHeader>Ingredients</IngredientHeader>
            <Ul>{ingredientItems}</Ul>
          </IngredientContainer>
        </DetailTextContainer>
      </DetailContainer>

      <ButtonContainer>
        <ButtonWrapper>
          <Button onClick={toggleDialogue}>
            <RiDeleteBin5Fill id="icon-delete" /> <ButtonTextSpan> Delete</ButtonTextSpan>
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onClick={handleRedirect}>
            <AiTwotoneEdit id="icon-edit" /> <ButtonTextSpan>Edit</ButtonTextSpan>
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
      {isDialogueShown && <Dialogue onHandleDelete={handleDelete} onHideDialogue={toggleDialogue} />}
    </div>
  );
}

const DetailName = styled.h1`
  text-align: center;
  margin: 8rem 0 2rem 0;
  font-weight: 400;
  font-size: 2.2rem;
  color: var(--secondary-color);
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 1rem;
  color: var(--secondary-color);
`;

const DetailImageContainer = styled.div`
  width: 300px;
  height: 240px;
`;
const DetailImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
`;

const DetailTextContainer = styled.div`
  width: 300px;
`;

const DetailSubTitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0 1.8rem -2rem;

  #icon-time,
  #icon-category {
    font-size: 1.5rem;
    color: var(--secondary-color);
  }
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TimeSpan = styled.span`
  margin: 0.15rem 0 0 0.5rem;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CategorySpan = styled.div`
  margin: 0.15rem 0 0 0.5rem;
`;

const IngredientContainer = styled.div`
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 1rem 0 0 0.2rem;
`;

const IngredientHeader = styled.div`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0.6rem;
  color: var(--tertiary-color);
`;

const Ul = styled.ul`
  list-style: none;
  margin-left: 2.2rem;
  line-height: 2.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const ButtonWrapper = styled.div`
  width: 110px;
  margin: 0 2rem;
`;

const Button = styled.button`
  padding: 10px;
  margin: 3rem 0 0 0;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: var(--white);
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :active {
    background-color: var(--third-color);
  }

  #icon-delete,
  #icon-edit {
    font-size: 1.2rem;
  }
`;

const ButtonTextSpan = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  font-weight: 300;
`;
