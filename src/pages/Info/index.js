import React from 'react';
import percentColor from '../../util/percentColor';
import { Lista, Percentual } from './styles';

export default function Info() {
  return (
    <Lista>
      <li>
        <div id="box">
          <h3>Obrigações Geradas</h3>
          <div id="circulocinza">
            <div id="quadradobranco">
              <Percentual backgroundColor={percentColor(20)} height={20}>
                <div id="grafico" />
              </Percentual>
            </div>
          </div>
          <strong>25 de 116</strong>
        </div>
        <small>Ver Mais</small>
      </li>
      <li>
        <div id="box">
          <h3>Obrigações validadas no PVA</h3>
          <div id="circulocinza">
            <div id="quadradobranco">
              <Percentual backgroundColor={percentColor(80)} height={80}>
                <div id="grafico" />
              </Percentual>
            </div>
          </div>
          <strong>25 de 116</strong>
        </div>
        <small>Ver Mais</small>
      </li>
      <li>
        <div id="box">
          <h3>Relatórios e verificações</h3>
          <div id="circulocinza">
            <div id="quadradobranco">
              <Percentual backgroundColor={percentColor(45)} height={45}>
                <div id="grafico" />
              </Percentual>
            </div>
          </div>
          <strong>25 de 116</strong>
        </div>
        <small>Ver Mais</small>
      </li>
      <li>
        <div id="box">
          <h3>Obrigações transmitidas</h3>
          <div id="circulocinza">
            <div id="quadradobranco">
              <Percentual backgroundColor={percentColor(65)} height={65}>
                <div id="grafico" />
              </Percentual>
            </div>
          </div>
          <strong>25 de 116</strong>
        </div>
        <small>Ver Mais</small>
      </li>
    </Lista>
  );
}
