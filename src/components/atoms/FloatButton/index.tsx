import React, { useState } from 'react';
import { DeleteModal } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faComment } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

interface IFloatButtonProps {
  content: string;
  onDelete: () => {
    payload: string;
    type: string;
  };
  onComment: () => void;
}

export function FloatButton({ content, onDelete, onComment }: IFloatButtonProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <S.Containr>
      <span className="delete">
        <FontAwesomeIcon cursor="pointer" icon={faTrash} onClick={onClick} />
      </span>
      <span className="comment">
        <FontAwesomeIcon cursor="pointer" icon={faComment} onClick={onComment} />
      </span>
      {isOpen && <DeleteModal content={content} onDelete={onDelete} setIsOpen={setIsOpen} />}
    </S.Containr>
  );
}
