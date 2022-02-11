import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;

  display: flex;

  align-items: center;
  padding: 15px 10px;
  border-radius: 10px;
  transition: 0.5s;

  &:hover {
    background: #f1f1f1;
  }

  &:before:hover {
  }
`;
