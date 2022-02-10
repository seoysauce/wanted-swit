import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faComment } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from 'hooks';
import * as S from './style';

interface IFloatButtonProps {
  id: string;
  onDelete: () => {
    payload: string;
    type: string;
  };
  onComment: () => void;
}

export function FloatButton({ id, onDelete, onComment }: IFloatButtonProps) {
  const { userId } = useAppSelector((state) => state.user);

  const deleteMessage = (text: string) => {
    if (window.confirm(`${text}`) === true) {
      onDelete();
    }
  };

  const onClick = () => {
    const isSamePerson = userId === id;

    if (isSamePerson) {
      deleteMessage('이 메시지를 삭제하시겠습니까?');
    } else {
      deleteMessage('나에게만 삭제하시겠습니까?');
    }
  };
  return (
    <S.Containr>
      <FontAwesomeIcon className="delete" icon={faTrash} onClick={onClick} />
      <FontAwesomeIcon className="comment" icon={faComment} onClick={onComment} />
    </S.Containr>
  );
}
