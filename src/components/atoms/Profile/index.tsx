import React from 'react';
import * as S from './style';

interface IProfileProps {
  profileImage: string;
}

export function Profile({ profileImage }: { profileImage: IProfileProps }) {
  return <S.Image src={`${profileImage}`} alt="Profile Image" />;
}
