import {AiOutlineArrowRight} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function ButtonStart() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/recipes`);
  };
  return (
    <Button type="button" onClick={handleRedirect}>
      <span>Start cooking</span> <AiOutlineArrowRight id="icon-start" />
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
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 6%;
  right: 1.5rem;

  #icon-start {
    margin-left: 0.5rem;
    color: var(--white);
  }
`;
