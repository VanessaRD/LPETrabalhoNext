/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// eslint-disable-next-line require-jsdoc
function SSG({lista}) {
  return (
    <div className="container-md">
      <h1>SSR com Next - Portões</h1>
      <table id="portoes" className="table">
        <thead>
          <tr className="table-dark">
            <th scope="col">Código</th>
            <th scope="col">Nome</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((portao) => (
            <tr key={portao.codigo}>
              <td>{portao.codigo}</td>
              <td>{portao.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SSG;
// eslint-disable-next-line require-jsdoc
export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portoes`);
  const lista = await res.json();
  return {
    props: {
      lista,
    },
  };
}
