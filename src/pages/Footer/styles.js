import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: #11456b;
  height: 30px;

  padding: 10px 10px 10px 9%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  color: #fff;
  font-size: 12px;

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  span {
    display: flex;
    align-items: center;
    opacity: 0.8;
  }

  svg {
    margin-left: 5px;
  }
`;
