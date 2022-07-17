import styled from 'styled-components';

export default function Dialogue({onHideDialogue, onHandleDelete}) {
  return (
    <BackgroundCover>
      <DialogueWrapper>
        <p>Are you sure you want to delete this recipe?</p>
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
  padding: 40px;
  border-radius: 9px;
`;

const DialogueButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  color: inherit;
`;

const ButtonCancel = styled.button`
  color: inherit;
  margin-right: 20px;
  padding: 5px 10px;
  border: 1px solid var(--blue);
  border-radius: 8px;
`;
const ButtonConfirm = styled.button`
  color: inherit;
  margin-left: 20px;
  padding: 5px 10px;
  border: 1px solid var(--blue);
  border-radius: 8px;
`;
