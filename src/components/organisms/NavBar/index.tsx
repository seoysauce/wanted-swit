import React, { useState } from 'react';
import { defaultUser, Logo, Magnifier } from 'assets';
import { useAppSelector } from 'hooks';
import { CHAT_ROOM_LIST, CURRENT_CHAT_ROOM } from 'commons';
import { ChatListItem } from 'components';
import { nanoid } from '@reduxjs/toolkit';
import * as S from './style';

export function NavBar() {
  const user = useAppSelector((state) => state.user);
  const messages = useAppSelector((state) => state.messages);
  const [searchTerm, setSearchTerm] = useState('');

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
          <S.Input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search people"
            spellCheck="false"
          />
          <Magnifier />
        </S.Search>
        <ChatListItem
          title={CURRENT_CHAT_ROOM.title}
          imageUrl={CURRENT_CHAT_ROOM.imageUrl}
          unread={CURRENT_CHAT_ROOM.unread}
          lastMessage={messages[messages.length - 1]?.content || '메시지가 없습니다'}
          lastTimestamp={messages[messages.length - 1]?.date.slice(2, 11) || ''}
          status={CURRENT_CHAT_ROOM.status}
          isSelected
        />
        {CHAT_ROOM_LIST.filter((val) =>
          val.title.toLowerCase().includes(searchTerm.toLowerCase()),
        ).map((e) => (
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
