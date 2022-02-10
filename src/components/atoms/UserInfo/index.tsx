import React from 'react';
import { dateToString } from 'utils';
import * as S from './style';

interface IUserInfoProps {
  userName: string;
}

export function UserInfo({ userName }: { userName: IUserInfoProps }) {
  const date = new Date();
  return (
    <S.Container>
      <S.Text>{userName}</S.Text>
      <S.Date>{dateToString(date)}</S.Date>
    </S.Container>
  );
}
