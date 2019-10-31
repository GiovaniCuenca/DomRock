import React, { useState, useEffect } from 'react';
import percentColor from '../../util/percentColor';
import { Lista, Percentual } from './styles';

import api from '../../services/api';

export default function Info() {
  const [obrigacoes, setObrigacoes] = useState([]);

  useEffect(() => {
    async function loadObrigacoes() {
      const response = await api.get('obrigacoes');

      const data = response.data.map(obrigacao => ({
        ...obrigacao,
      }));

      setObrigacoes(data);
    }

    loadObrigacoes();
  }, []);

  return (
    <Lista>
      {obrigacoes.map(obrigacao => (
        <li key={obrigacao.id}>
          <div id="box">
            <h3>{obrigacao.title}</h3>
            <div id="circulocinza">
              <div id="quadradobranco">
                <Percentual
                  backgroundColor={percentColor(obrigacao.percentual)}
                  height={obrigacao.percentual}
                >
                  <div id="grafico" />
                </Percentual>
              </div>
            </div>
            <strong>{obrigacao.info}</strong>
          </div>
          <small>Ver Mais</small>
        </li>
      ))}
    </Lista>
  );
}
