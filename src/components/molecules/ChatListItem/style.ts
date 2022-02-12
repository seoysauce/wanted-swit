import styled from 'styled-components';

const statusColor = (status: string): string => {
  switch (status) {
    case 'online':
      return '#6cb853';
    case 'away':
      return '#feb52e';
    case 'offline':
      return '#a6b2be';
    default:
      return '#6cb853';
  }
};

export const Container = styled.div<{ isSelected: boolean }>`
  display: flex;
  height: 70px;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  margin: 5px 0;
  &:hover {
    background-color: #f8fafb;
  }
  ${(props) => props.isSelected && `border: 1px solid #e2e2e2; background-color: #f8fafb`}
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
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
`;

export const OnlineBadge = styled.div<{ status: string }>`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #6cb853;
  position: absolute;
  right: 2px;
  bottom: 2px;
  border: 2px solid #ffffff;
  ${(props) => `background-color: ${statusColor(props.status)};`}
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 5px 0px;
  gap: 15px;
`;

export const Timestamp = styled.div`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.3);
  min-width: max-content;
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
