import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 1020px;

  #head1 {
    background: #0a1f30;
  }

  #head2 {
    margin: 10px 0px 50px 0px;
    border-bottom: 1px solid #5295bc;
  }

  #head3 {
    margin-bottom: 20px;
    border-bottom: 1px solid #5295bc;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 800px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  #esq {
    background: #11456b;
    min-width: 5%;
    width: 10%
    border-right: 1px solid #5295bc;
  }

  #dir {
    background: #fff;
    width: 100%;
    min-width: 400px;
    max-width: 929px;
  }
`;

export const Conteudo = styled.div`
  padding: 50px 30px;
  display: flex;
  flex-direction: column;

  #cabecalho {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #recepcao {
      font-size: 14px;
      color: #666;
    }

    #data {
      font-size: 14px;
      color: #139595;
    }
  }

  #tituloDash {
    margin: 40px 0px 20px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    > span {
      font-size: 26px;
      color: #00639c;
    }

    #checkfiliais {
      display: flex;
      align-items: center;
    }
  }
`;

export const Obrigacoes = styled.div`
  background: #e6e9f2;
  padding: 35px 45px;
  border-radius: 5px;

  div#filtros {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 5px 0px 20px 0px;

    select {
      height: 35px;
      border: 2px solid #c8d6e1;
      border-radius: 4px;
      background: #E6E9F2;

      font-size: 12px;
      color: #586375;
    }
    #selectoperacao {
      width: 44%;
    }

    #selectmes {
      width: 22%;
    }

    #selectano {
      width: 15%;
    }

    button {
      width: 15%
      border-radius: 4px;
      background: #00b4f1;
      border: none;
      padding: 10px 20px;
      color: #FFF;
      font-size: 12px;
    }
  }
`;
