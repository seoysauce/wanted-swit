import React, { useState } from 'react';
import { setUser } from 'redux/userSlice';
import { useAppDispatch } from 'hooks';
import ReactDOM from 'react-dom';
import * as S from './style';

interface IModalProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<EventTarget>) => void;
}

function BackDrop() {
  return <S.BackDrop />;
}

function Modal({ name, onChange, onSubmit }: IModalProps) {
  return (
    <S.Container onSubmit={onSubmit}>
      <img src="https://app.swit.io/assets/images/lib/ui/logo-small.svg" alt="logo" />
      <S.Text>닉네임을 입력해주세요!</S.Text>
      <S.Input placeholder="입력해주세요" onChange={onChange} value={name} required />
      <S.Button>확인</S.Button>
    </S.Container>
  );
}

export function RegisterModal({
  setIsEmpty,
}: {
  setIsEmpty: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');
  const backDropRoot: HTMLElement = document.getElementById('backdrop-root') as HTMLElement;
  const modalRoot: HTMLElement = document.getElementById('modal-root') as HTMLElement;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (name) {
      setIsEmpty(false);
      dispatch(setUser(name));
    }
  };

  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, backDropRoot)}
      {ReactDOM.createPortal(
        <Modal name={name} onChange={onChange} onSubmit={onSubmit} />,
        modalRoot,
      )}
    </>
  );
}
