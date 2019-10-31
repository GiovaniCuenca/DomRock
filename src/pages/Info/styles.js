import styled from 'styled-components';

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  text-align: center;

  #box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    min-width: 140px;
    max-width: 170px;
    background: #fff;
    border-radius: 8px;
    border: 2px solid #c8d6e2;

    min-height: 250px;
    max-height: 250px;

    h3 {
      color: #139595;
      margin: 15px 0px 20px 0px;
    }

    #circulocinza {
      width: 100px;
      height: 100px;
      border-radius: 60px;
      background: #e6e9f2;
      border: 2px solid #c8d6e2;

      margin-top: auto;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    #quadradobranco {
      width: 65px;
      height: 55px;
      background: #fff;
      border: 2px solid #c8d6e2;
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    strong {
      color: #666;
      margin: 10px 0px 25px 0px;
    }
  }

  small {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: auto;
    margin: 10px 0px;
    font-size: 14px;
    color: #00b4f1;
  }
`;

export const Percentual = styled.div`
  width: 60px;
  border-radius: 2px;
  border: 2px solid #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  align-self: flex-end;

  height: ${props => `${props.height}%`};
  background: ${props => props.backgroundColor};
`;
