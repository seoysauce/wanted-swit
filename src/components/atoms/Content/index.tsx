import React from 'react';
import * as S from './style';

interface IContentProps {
  content: string;
}

export function Content({ content }: IContentProps) {
  return <S.Content>{content}</S.Content>;
}
