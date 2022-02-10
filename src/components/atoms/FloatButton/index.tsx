import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faComment } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

export function FloatButton() {
  return (
    <S.Containr>
      <FontAwesomeIcon icon={faTrash} />
      <FontAwesomeIcon icon={faComment} />
    </S.Containr>
  );
}
