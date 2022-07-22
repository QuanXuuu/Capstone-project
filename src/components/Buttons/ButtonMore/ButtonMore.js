import {AiOutlineArrowRight} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function ButtonMore({id}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/recipes/${id}`);
  };

  console.log({id});
  return (
    <Button type="button" onClick={handleRedirect}>
      <span>More</span> <AiOutlineArrowRight id="icon-arrow-right" />
    </Button>
  );
}

const Button = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'nothing you could do', sans-serif;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 5px 12px;
  cursor: pointer;
  position: absolute;
  bottom: 4%;
  right: 8%;
  display: flex;
  align-items: center;

  #icon-arrow-right {
    margin-left: 0.5rem;
    color: var(--white);
  }
`;
