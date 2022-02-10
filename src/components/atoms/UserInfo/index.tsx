import React from 'react';
import * as S from './style';

interface IUserInfoProps {
  userName: string;
  date: string;
}

export function UserInfo({ userName, date }: IUserInfoProps) {
  return (
    <S.Container>
      <S.Text>{userName}</S.Text>
      <S.Date>{date}</S.Date>
    </S.Container>
  );
}
