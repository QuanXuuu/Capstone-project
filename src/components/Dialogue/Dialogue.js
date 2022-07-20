import styled from 'styled-components';

export default function Dialogue({onHideDialogue, onHandleDelete}) {
  return (
    <BackgroundCover>
      <DialogueWrapper>
        <Text>Are you sure you want to delete this recipe?</Text>
        <DialogueButtonWrapper>
          <ButtonCancel onClick={onHideDialogue}>Cancel</ButtonCancel>
          <ButtonConfirm onClick={onHandleDelete}>Delete</ButtonConfirm>
        </DialogueButtonWrapper>
      </DialogueWrapper>
    </BackgroundCover>
  );
}

const BackgroundCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const DialogueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  padding: 40px 60px;
  border-radius: 9px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
`;

const DialogueButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  color: inherit;
  margin-top: 1rem;
`;

const ButtonCancel = styled.button`
  border: none;
  background-color: var(--secondary-color);
  color: var(--white);
  margin-right: 20px;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
`;
const ButtonConfirm = styled.button`
  background-color: var(--secondary-color);
  color: var(--white);
  margin-left: 20px;
  padding: 5px 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
