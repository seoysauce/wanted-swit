import styled from 'styled-components';

export const Form = styled.form``;

export const InputBox = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 14px;
  line-height: 1.42857143;
  font-family: 'Roboto', sans-serif !important;
  /* color: #747584; */
  box-sizing: border-box;
  width: 100%;
  float: left;
  background: #f2f5f9;
  padding: 20px;
  border-top: 1px solid #e6e6e6;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
`;

export const TextArea = styled.textarea`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  color: inherit;
  font: inherit;
  margin: 0;
  overflow: auto;
  font-family: inherit;
  line-height: inherit;
  border: none;
  font-size: 12px;
  width: calc(100% - 100px);
  float: left;
  background: transparent;
  margin-bottom: 10px;
  resize: none;
  &::placeholder {
    color: #c4c4c4;
  }
`;

export const Button = styled.button`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  font: inherit;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  font-family: inherit;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  font-size: 12px;
  line-height: 1.5;
  background: #ff595d;
  border: 1px solid #ff595d;
  ${(props) => props.disabled && '-webkit-filter: grayscale(100%);'}
  color: #fff;
  box-shadow: 1px 1px 3px rgba(28, 133, 255, 0.3);
  padding: 5px 14px !important;
  display: inline-block !important;
  width: 80px;
  position: absolute;
  top: 26px;
  right: 25px;
  border-radius: 25px;
`;
