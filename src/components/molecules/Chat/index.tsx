import React, { useState } from 'react';
import { Profile, UserInfo, Content, FloatButton } from 'components';
import { IMessage } from 'types';
import * as S from './style';

export function Chat({ message }: { message: IMessage }) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { userName, profileImage, content, date } = message;

  const onHover = () => setIsHover(true);
  const onLeave = () => setIsHover(false);

  return (
    <S.Container onMouseOver={onHover} onMouseLeave={onLeave}>
      <Profile profileImage={profileImage} />
      <div>
        <UserInfo userName={userName} date={date} />
        <Content content={content} />
      </div>
      {isHover && <FloatButton />}
    </S.Container>
  );
}
