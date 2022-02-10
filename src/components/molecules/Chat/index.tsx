import React from 'react';
import { Profile, UserInfo, Content } from 'components';
import { IMessage } from 'types';
import * as S from './style';

export function Chat({ message }: { message: IMessage }) {
  const { userName, profileImage, content, date } = message;
  return (
    <S.Container>
      <Profile profileImage={profileImage} />
      <UserInfo userName={userName} date={date} />
      <Content content={content} />
    </S.Container>
  );
}
