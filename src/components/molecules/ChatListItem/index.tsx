import React from 'react';
import { defaultUser } from 'assets';
import { trimString } from 'utils';
import * as S from './style';

interface IChatListItemProps {
  title: string;
  unread: number;
  lastMessage: string;
  lastTimestamp: string;
}

export function ChatListItem({ title, unread, lastMessage, lastTimestamp }: IChatListItemProps) {
  return (
    <S.Container>
      <S.Wrap>
        <S.ImageBox>
          <S.Image src={defaultUser} />
          <S.OnlineBadge />
        </S.ImageBox>
        <S.Info>
          <S.Name>{trimString(title, 13)}</S.Name>
          <S.LastMessage>{trimString(lastMessage, 13)}</S.LastMessage>
        </S.Info>
      </S.Wrap>
      <S.Div>
        <S.Timestamp>{lastTimestamp}</S.Timestamp>
        {unread > 0 && (
          <S.Badge>
            <span>{unread}</span>
          </S.Badge>
        )}
      </S.Div>
    </S.Container>
  );
}
