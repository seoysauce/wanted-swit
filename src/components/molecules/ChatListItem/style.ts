import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #f8fafb;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const ImageBox = styled.div`
  position: relative;
`;

export const Image = styled.img`
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
`;

export const OnlineBadge = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #6cb853;
  position: absolute;
  right: 3px;
  bottom: 3px;
  border: 2px solid #ffffff;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const LastMessage = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
`;

export const Timestamp = styled.div`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.3);
`;

export const Badge = styled.div`
  background-color: #6cb853;
  color: white;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  span {
    font-size: 12px;
    font-weight: 700;
  }
`;
