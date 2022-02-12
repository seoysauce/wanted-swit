import React from 'react';
import * as S from './style';

interface IContentProps {
  content: string;
  isUser: boolean;
}

export function Content({ content, isUser }: IContentProps) {
  return <S.Content isUser={isUser}>{content}</S.Content>;
}
