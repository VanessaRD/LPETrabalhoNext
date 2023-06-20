/* eslint-disable react/react-in-jsx-scope */
import {useState, useEffect} from 'react';

// eslint-disable-next-line require-jsdoc
function CSR() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/modelos`)
        .then((response) => response.json())
        .then((json) => setLista(json));
  }, []);

  return (
    <div className="container-md">
      <h1>CSR com Next - Modelos</h1>
      <table id="modelos" className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Nome</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((modelo) => (
            <tr scope="row" key={modelo.codigo}>
              <td>{modelo.codigo}</td>
              <td>{modelo.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CSR;
