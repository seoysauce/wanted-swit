import React from 'react';
import { isMessageEmpty } from 'utils';
import { useInputMessage } from 'hooks';
import { IInputMessage } from 'types';
import { INPUT_MESSAGE } from 'commons';
import * as S from './style';

export function InputMessage({ replyInfo }: IInputMessage) {
  const [message, textAreaRef, handleSubmit, handleChange, handleKeyPress, sendMessage] =
    useInputMessage({
      replyInfo,
    });

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputBox>
        <S.TextArea
          placeholder="Enter message"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          cols={INPUT_MESSAGE.WIDTH}
          rows={1}
          value={message}
          ref={textAreaRef}
          spellCheck={false}
        />
        <S.Button disabled={isMessageEmpty(message)} type="button" onClick={() => sendMessage()}>
          전송
        </S.Button>
      </S.InputBox>
    </S.Form>
  );
}
