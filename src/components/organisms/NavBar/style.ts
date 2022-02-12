import styled from 'styled-components';
import { STYLE } from 'commons';

export const Container = styled.div`
  min-width: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
  svg {
    margin-left: 10px;
  }
  @media screen and (max-width: ${STYLE.WEB_WIDTH}px) {
    transform: translateX(-320px);
    transition: transform 0.3s ease-in-out;
  }
`;

export const Line = styled.hr`
  margin-top: 20px;
  margin-right: 30px;
  width: 93%;
  border: 0;
  border-top: 1px solid #e6e6e6;
`;

export const UserBox = styled.div`
  margin: 5px 10px;
  display: flex;
  gap: 20px;
`;

export const Search = styled.div`
  background-color: #f8fafb;
  padding: 10px;
  color: #c4c4c4;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  margin-bottom: 10px;
  svg {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  &::placeholder {
    color: #c4c4c4;
  }
  width: 90%;
  outline: none;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
`;

export const UserInfo = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

export const UserDesc = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-weight: 700;
`;

export const UserName = styled.div`
  color: #ff595d;
  font-weight: 800;
  font-size: 24px;
`;

export const ChatList = styled.div`
  overflow-y: scroll;
  padding-right: 10px;
  width: 100%;
`;
