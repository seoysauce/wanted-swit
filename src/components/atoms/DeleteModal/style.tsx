import styled from 'styled-components';
import { STYLE } from 'commons';

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

  width: 400px;
  height: 300px;
  z-index: 100;
  overflow: hidden;

  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: ${STYLE.WEB_WIDTH}px) {
    width: 280px;
    height: 210px;
    gap: 10px;
  }
`;

export const Text = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  overflow-wrap: break-word;
  text-align: left;
  word-wrap: break-word;
  /* margin: 30px 0; */
  @media screen and (max-width: ${STYLE.WEB_WIDTH}px) {
    font-size: 20px;
  }
`;

export const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  margin: 0;
  overflow-wrap: break-word;
  text-align: left;
  word-wrap: break-word;
  /* margin: 30px 0; */
  color: #b5b5b5;
  @media screen and (max-width: ${STYLE.WEB_WIDTH}px) {
    font-size: 13px;
  }
`;

const Button = styled.button`
  background-color: #efefef;
  border-radius: 10px;
  border-width: 0;
  box-sizing: border-box;
  color: rgba(16, 16, 16, 0.3);
  cursor: pointer;
  display: inline-block;
  font-size: 100%;
  line-height: normal;
  margin-top: 30px;
  height: 40px;
  min-width: 60px;
  text-align: center;
  vertical-align: middle;
  margin-right: 10px;
  @media screen and (max-width: ${STYLE.WEB_WIDTH}px) {
    font-size: 14px;
    width: 50px;
    height: 35px;
    padding: 0;
    margin-top: 20px;
  }
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
