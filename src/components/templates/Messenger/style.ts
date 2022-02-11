import styled from 'styled-components';
import { STYLE } from 'commons';

export const Container = styled.main`
  display: flex;
  background-color: #f4f5f8;
  padding: 50px;
  height: 100vh;
  width: 100vw;
  @media screen and (max-width: ${STYLE.MOBILE_WIDTH}px) {
    padding: 0;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  border-radius: 30px;
  background-color: #ffffff;
  padding: 30px;
  border: 1px solid #e6e6e6;
  display: flex;
  overflow-x: hidden;
  @media screen and (max-width: ${STYLE.MOBILE_WIDTH}px) {
    border-radius: 0;
    padding: 0;
  }
`;
