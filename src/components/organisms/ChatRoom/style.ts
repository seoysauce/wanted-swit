import styled from 'styled-components';
import { STYLE } from 'commons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #f8fafb;
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  @media screen and (max-width: ${STYLE.WEB_WIDTH}px) {
    transform: translateX(-20%);
  }
`;

export const Title = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #f2f5f9;
  width: 100%;
  height: 51px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-weight: 800;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 20px;
  overflow-y: scroll;
  height: 100%;
`;
