import React, { useState } from 'react';
import { Profile, UserInfo, Content, FloatButton } from 'components';
import { ICommentState, IMessage } from 'types';
import { useAppDispatch, useAppSelector } from 'hooks';
import { messageDeleted } from 'redux/messagesSlice';
import * as S from './style';

interface IChatProps {
  message: IMessage;
  setComment: React.Dispatch<React.SetStateAction<ICommentState>>;
}

export function Chat({ message, setComment }: IChatProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { userId, messageId, userName, profileImage, content, date } = message;
  const dispatch = useAppDispatch();
  const signInUserInfo = useAppSelector((state) => state.user);

  const onHover = () => setIsHover(true);
  const onLeave = () => setIsHover(false);
  const onDelete = () => dispatch(messageDeleted(messageId));
  const onComment = () => {
    setComment({
      userId,
      userName,
      content,
    });
  };

  return (
    <S.Container onMouseOver={onHover} onMouseLeave={onLeave}>
      <Profile profileImage={profileImage} />
      <div>
        <UserInfo
          userName={signInUserInfo.userId === userId ? `${userName} *` : userName}
          date={date}
        />
        <Content content={content} />
      </div>
      {isHover && <FloatButton content={content} onDelete={onDelete} onComment={onComment} />}
    </S.Container>
  );
}
