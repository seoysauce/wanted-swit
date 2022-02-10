import React from 'react';
import * as S from './style';

interface IContentProps {
  contnet: string;
}

export function Content({ content }: { content: IContentProps }) {
  return <S.Content>{content}</S.Content>;
}
