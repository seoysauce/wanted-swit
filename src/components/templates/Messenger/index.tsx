import React from 'react';
import { NavBar, ChatRoom } from 'components';
import * as S from './style';

export function Messenger() {
  return (
    <S.Container>
      <S.Wrap>
        <NavBar />
        <ChatRoom />
      </S.Wrap>
    </S.Container>
  );
}
