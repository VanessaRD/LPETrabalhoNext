/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import Link from 'next/link';

// eslint-disable-next-line require-jsdoc
export default function Home() {
  return (
    <div className="container-md">
      <Head>
        <title>Página inicial do App Next</title>
      </Head>
      <h3>Usando Next.js   -   {process.env.NEXT_PUBLIC_API_URL}</h3>
      <Link href="/contato">
        Contato
      </Link><br />
    </div>
  );
}
