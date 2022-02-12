import styled from 'styled-components';

export const Wrap = styled.div`
  /* position: absolute; */
  /* right: 20px; */

  display: flex;
  justify-content: space-between;

  width: 80px;
  padding: 10px 20px;

  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(65, 47, 47, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  transition: 0.3s;

  & .delete:hover {
    transition: 0.3s;
    color: #e94b48;
  }

  & .delete:hover::before {
    content: '삭제';
    position: absolute;
    top: -30px;
    left: 5px;
    color: black;

    padding: 5px 10px;
    background-color: #dedede;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .comment:hover {
    transition: 0.3s;
    color: #00569d;
  }

  & .comment:hover::before {
    content: '댓글';
    position: absolute;
    top: -30px;
    right: 5px;
    color: black;

    padding: 5px 10px;
    background-color: #dedede;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Containr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  height: 100%;
  bottom: 0;
`;
