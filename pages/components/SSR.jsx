/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// eslint-disable-next-line require-jsdoc
function SSR({lista}) {
  return (
    <div className="container-md">
      <h1>SSR com Next - Carros</h1>
      <table id="carros" className="table table-striped table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">Placa</th>
            <th scope="col">Ano</th>
            <th scope="col">Cor</th>
            <th scope="col">Nome Modelo</th>
            <th scope="col">Nome Portao</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((carro) => (
            <tr key={carro.placa}>
              <td>{carro.placa}</td>
              <td>{carro.ano}</td>
              <td>{carro.cor}</td>
              <td>{carro.nomeModelo}</td>
              <td>{carro.nomePortao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SSR;
// eslint-disable-next-line require-jsdoc
export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carros`);
  const lista = await res.json();
  return {
    props: {
      lista,
    },
  };
}
