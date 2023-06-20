/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// eslint-disable-next-line require-jsdoc
function ISR({lista}) {
  return (
    <div className="container-md">
      <h1>SSR com Next - Modelos</h1>
      <table id="modelos" className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Nome</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((modelo) => (
            <tr key={modelo.codigo}>
              <td>{modelo.codigo}</td>
              <td>{modelo.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ISR;

// eslint-disable-next-line require-jsdoc
export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/modelos`);
  const lista = await res.json();

  return {
    props: {
      lista,
    },
    revalidate: 30,
  };
}
