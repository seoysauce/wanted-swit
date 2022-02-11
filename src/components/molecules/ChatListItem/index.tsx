import React from 'react';
import { defaultUser } from 'assets';
import { trimString } from 'utils';
import * as S from './style';

interface IChatListItemProps {
  title: string;
  imageUrl: string;
  unread: number;
  lastMessage: string;
  lastTimestamp: string;
  isSelected: boolean;
  status: string;
}

export function ChatListItem({
  title,
  imageUrl,
  unread,
  lastMessage,
  lastTimestamp,
  isSelected,
  status,
}: IChatListItemProps) {
  return (
    <S.Container isSelected={isSelected}>
      <S.Wrap>
        <S.ImageBox>
          <S.Image src={imageUrl || defaultUser} />
          <S.OnlineBadge status={status} />
        </S.ImageBox>
        <S.Info>
          <S.Name>{trimString(title, 13)}</S.Name>
          <S.LastMessage>{trimString(lastMessage, 15)}</S.LastMessage>
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
