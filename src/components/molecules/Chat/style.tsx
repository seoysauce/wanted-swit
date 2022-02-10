import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;

  display: flex;

  align-items: center;

  margin: 10px 0;
  padding: 15px 10px;

  border: 1px solid #dedede;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  box-sizing: border-box;
  transition: 0.5s;

  &:hover {
    background: #e6e6e8;
  }

  &:before:hover {
  }
`;
