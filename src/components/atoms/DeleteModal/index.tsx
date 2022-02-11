import React from 'react';
import ReactDOM from 'react-dom';
import { trimString } from 'utils/trimString';
import * as S from './style';

interface IDeleteModal {
  content: string;
  onDelete: () => {
    payload: string;
    type: string;
  };
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function BackDrop() {
  return <S.BackDrop />;
}

function Modal({ content, onDelete, setIsOpen }: IDeleteModal) {
  const onClick = (
    func?: () => {
      payload: string;
      type: string;
    },
  ) => {
    if (func) {
      func();
    }
    setIsOpen(false);
  };
  return (
    <S.Container>
      <S.Text>정말 삭제하시겠어요?</S.Text>
      <S.Description>{trimString(content, 10)}</S.Description>
      <div>
        <S.DelButton onClick={() => onClick(onDelete)}>확인</S.DelButton>
        <S.CalcelButton onClick={() => onClick()}>취소</S.CalcelButton>
      </div>
    </S.Container>
  );
}

export function DeleteModal({ content, onDelete, setIsOpen }: IDeleteModal) {
  const backDropRoot: HTMLElement = document.getElementById('backdrop-root') as HTMLElement;
  const modalRoot: HTMLElement = document.getElementById('modal-root') as HTMLElement;

  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, backDropRoot)}
      {ReactDOM.createPortal(
        <Modal content={content} onDelete={onDelete} setIsOpen={setIsOpen} />,
        modalRoot,
      )}
    </>
  );
}
