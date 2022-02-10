import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const Container = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 30%;
  height: 300px;
  z-index: 100;
  overflow: hidden;

  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  overflow-wrap: break-word;
  text-align: left;
  word-wrap: break-word;
  margin: 30px 0;
`;

export const Description = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  overflow-wrap: break-word;
  text-align: left;
  word-wrap: break-word;
  margin: 30px 0;
`;

const Button = styled.button`
  background-color: #efefef;
  border-radius: 24px;
  border-width: 0;
  box-sizing: border-box;
  color: rgba(16, 16, 16, 0.3);
  cursor: pointer;
  display: inline-block;
  font-size: 100%;
  line-height: normal;
  margin-top: 30px;
  min-height: 48px;
  min-width: 60px;
  padding: 12px 16px;
  text-align: center;
  vertical-align: middle;

  margin-right: 10px;
`;

export const DelButton = styled(Button)`
  background: #ff585d;
  color: #ffff;
  transition: 0.3s;
  &:hover {
    background: #ff4500;
  }
`;

export const CalcelButton = styled(Button)`
  background: #3e77b6;
  color: #fff;

  transition: 0.3s;
  &:hover {
    background: #003abb;
  }
`;
