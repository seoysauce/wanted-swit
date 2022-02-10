import styled from 'styled-components';

export const Containr = styled.div`
  position: absolute;
  right: 20px;

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

  & .comment:hover {
    transition: 0.3s;
    color: #00569d;
  }
`;
