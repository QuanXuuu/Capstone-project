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
    navigate('/');
  };

  const handleRedirect = () => {
    navigate(`/recipes/${id}/edit`);
  };

  return (
    <>
      <DetailHeader>{recipe.name}</DetailHeader>
      <DetailCard>
        <DetailImageContainer>
          <DetailImage src={recipe.imgURL} alt={`Picture of a ${recipe.name}`} />
        </DetailImageContainer>
        <DetailSubContainer>
          <TimeContainer>
            <BsClockHistory id="icon-time" />
            <TimeSpan>
              {recipe.prepTime}
              <small>mins</small>
            </TimeSpan>
          </TimeContainer>

          <CategoryContainer>
            <BiCategoryAlt id="icon-category" /> <CategorySpan> {recipe.category}</CategorySpan>
          </CategoryContainer>
        </DetailSubContainer>

        <IngredientContainer>
          <IngredientHeader>
            <TextSpan>Ingredients</TextSpan>
          </IngredientHeader>

          <Ul>{ingredientItems}</Ul>
        </IngredientContainer>

        <ButtonContainer>
          <Button onClick={toggleDialogue}>
            <RiDeleteBin5Fill id="icon-delete" /> <ButtonTextSpan> Delete</ButtonTextSpan>
          </Button>

          <Button onClick={handleRedirect}>
            <AiTwotoneEdit id="icon-edit" /> <ButtonTextSpan>Edit</ButtonTextSpan>
          </Button>
        </ButtonContainer>

        {isDialogueShown && <Dialogue onHandleDelete={handleDelete} onHideDialogue={toggleDialogue} />}
      </DetailCard>
    </>
  );
}

const DetailHeader = styled.h1`
  text-align: center;
  margin: 3.6em 0 1em 0;
  font-weight: 400;
  font-size: 2rem;
`;

const DetailCard = styled.div`
  border-radius: 1rem;
  margin: 0 auto;
  box-shadow: 1rem 0.5rem 1rem #e6e6e6;
  max-width: 375px;
`;

const DetailSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem 0 1rem 0;

  #icon-time {
    font-size: 1.5rem;
  }
  #icon-category {
    font-size: 1.5rem;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: -1rem;
`;
const TimeSpan = styled.span`
  margin: 0.2rem 0 0 0.5rem;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CategorySpan = styled.div`
  margin: 0.15rem 0 0 0.5rem;
`;

const DetailImageContainer = styled.div`
  width: 375px;
  height: 240px;
`;
const DetailImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
`;

const IngredientContainer = styled.div`
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 1rem 0 0 2rem;
`;

const IngredientHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0 0.5rem 0;
`;

const TextSpan = styled.span`
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

const Ul = styled.ul`
  list-style: none;
  margin-left: 2.5rem;
  line-height: 1.8rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 2px 20px;
  margin: 2rem 0;
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

  #icon-delete,
  #icon-edit {
    font-size: 2.2rem;
  }
`;

const ButtonTextSpan = styled.span`
  font-size: 0.8rem;
`;
