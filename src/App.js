import React, { useState, useEffect } from 'react';

import GlobalStyle from './styles/global';
import { Header, Container, Conteudo, Obrigacoes } from './styles/styles';
import logo from './images/logo.jpg';

import Info from './pages/Info';
import Footer from './pages/Footer';
import { getCurrentDate } from './util/getDate';

import api from './services/api';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');

      const data = response.data.map(user => ({
        ...user,
      }));

      setUsers(data);
    }

    loadUsers();
  }, []);

  return (
    <>
      <Header>
        <header id="head1">
          <img src={logo} alt="Dom Rock" />
        </header>
        <header id="head2" />
        <header id="head3" />
      </Header>
      <Container>
        <div id="esq" />
        <div id="dir">
          <Conteudo>
            <header id="cabecalho">
              {users.map(user => (
                <span id="recepcao" key={user.id}>
                  Olá <strong>{user.name}</strong>, bem vindo a Dom Rock
                </span>
              ))}
              <span id="data">{getCurrentDate()}</span>
            </header>
            <header id="tituloDash">
              <span>Dashboard das Obrigações</span>
              <div id="checkfiliais">
                <input type="checkbox" />
                <span>Incluir Filiais</span>
              </div>
            </header>
            <Obrigacoes>
              <div id="filtros">
                <select id="selectoperacao">
                  <option value="spedfiscal">SPED FISCAL</option>
                  <option value="contabilidade">CONTABILIDADE</option>
                </select>
                <select id="selectmes">
                  <option value="Outubro">Outubro</option>
                  <option value="Novembro">Novembro</option>
                </select>
                <select id="selectano">
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                </select>
                <button type="button">Filtrar</button>
              </div>
              <Info />
            </Obrigacoes>
          </Conteudo>
        </div>
      </Container>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
