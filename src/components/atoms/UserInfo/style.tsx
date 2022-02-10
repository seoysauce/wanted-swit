import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 700;

  margin-right: 8px;

  overflow: hidden;
  overflow-wrap: break-word;

  text-overflow: ellipsis;

  white-space: nowrap;
  word-break: break-word;
  word-wrap: break-word;
`;

export const Date = styled.span`
  color: #8b8e95;
  font-size: 12px;
  margin-right: 4px;
  word-break: break-word;
`;
