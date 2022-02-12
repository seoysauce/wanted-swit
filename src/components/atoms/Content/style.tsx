import styled from 'styled-components';

interface IContentProps {
  isUser: boolean;
}

export const Content = styled.div<IContentProps>`
  color: #343434;
  background-color: ${(props) => (props.isUser ? `#F8E432;` : `#ffffff;`)}
  width: fit-content;
  padding: 5px 10px;
  box-shadow: rgba(99, 99, 99, 0.15) 0px 2px 8px 0px;
  border-radius: 10px;
  border-top-left-radius: 0;
  height: fit-content;

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  margin-top: 5px;
  white-space: pre-wrap;
  word-break: break-word;
`;
