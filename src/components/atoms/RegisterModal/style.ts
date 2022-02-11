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
  @media screen and (max-width: ${STYLE.WEB_WIDTH}px) {
    width: 280px;
    height: 210px;
  }
`;

export const Text = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  overflow-wrap: break-word;
  text-align: left;
  word-wrap: break-word;
  margin: 30px 0;
  @media screen and (max-width: ${STYLE.WEB_WIDTH}px) {
    font-size: 20px;
    margin: 20px 0;
  }
`;

export const Input = styled.input`
  -webkit-font-smoothing: antialiased;
  appearance: none;
  background-color: #fff;
  border: 2px solid #d0d0d0;
  border-radius: 16px;
  box-sizing: border-box;
  color: #111;
  cursor: text;

  font-size: 16px;
  line-height: normal;
  margin: 0;
  width: 300px;
  min-height: 48px;
  overflow: hidden;
  padding: 8px 16px;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: ${STYLE.WEB_WIDTH}px) {
    font-size: 13px;
    /* padding: 2px 4px; */
    min-height: 30px;
    width: 200px;
  }
`;

export const Button = styled.button`
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
  width: 90px;
  text-align: center;
  vertical-align: middle;
  @media screen and (max-width: ${STYLE.WEB_WIDTH}px) {
    font-size: 14px;
    width: 80px;
    height: 35px;
    padding: 0;
    margin-top: 20px;
  }

  &:hover {
    background: #ff585d;
    color: #ffffff;
  }
`;
