import React from 'react';
import { defaultUser, Logo, Magnifier } from 'assets';
import { useAppSelector } from 'hooks';
import { CHAT_ROOM_LIST } from 'commons';
import { ChatListItem } from 'components';
import { nanoid } from '@reduxjs/toolkit';
import * as S from './style';

export function NavBar() {
  const user = useAppSelector((state) => state.user);

  return (
    <S.Container>
      <Logo />
      <S.Line />
      <S.UserBox>
        <S.UserImage src={user.profileImage || defaultUser} />
        <S.UserInfo>
          <S.UserDesc>Hello,</S.UserDesc>
          <S.UserName>{user.userName}</S.UserName>
        </S.UserInfo>
      </S.UserBox>
      <S.Search>
        <S.Input type="text" placeholder="search people" />
        <Magnifier />
      </S.Search>
      {CHAT_ROOM_LIST.map((e) => (
        <ChatListItem
          key={nanoid()}
          title={e.title}
          unread={e.unread}
          lastMessage={e.lastMessage}
          lastTimestamp={e.lastTimestamp}
        />
      ))}
    </S.Container>
  );
}
