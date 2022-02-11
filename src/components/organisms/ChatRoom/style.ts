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
    transform: translateX(-310px);
    min-width: 100%;
    transition: transform 0.3s ease-in-out;
  }
  @media screen and (max-width: ${STYLE.MOBILE_WIDTH}px) {
    border-radius: 0;
  }
`;
export const TopBar = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #f2f5f9;
  width: 100%;
  min-height: 51px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 600;
  padding: 0 20px;
`;

export const Title = styled.div`
  font-weight: 800;
  color: rgba(0, 0, 0, 0.5);
  margin-right: 15px;
`;

export const Member = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrap = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 20px;
`;
