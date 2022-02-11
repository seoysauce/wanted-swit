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
      <S.ChatList>
        <S.Search>
          <S.Input type="text" placeholder="search people" spellCheck="false" />
          <Magnifier />
        </S.Search>
        <ChatListItem
          title="Team Tyranno"
          imageUrl="https://art.pixilart.com/d8a5d6f1f1f432a.png"
          unread={0}
          lastMessage="ㅎㅇ"
          lastTimestamp="08:10"
          status="online"
          isSelected
        />
        {CHAT_ROOM_LIST.map((e) => (
          <ChatListItem
            key={nanoid()}
            title={e.title}
            imageUrl={e.imageUrl}
            unread={e.unread}
            lastMessage={e.lastMessage}
            lastTimestamp={e.lastTimestamp}
            status={e.status}
            isSelected={false}
          />
        ))}
      </S.ChatList>
    </S.Container>
  );
}
