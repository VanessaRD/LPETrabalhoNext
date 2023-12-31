/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useEffect} from 'react';
import Menu from './components/Menu';

// eslint-disable-next-line require-jsdoc
function MyApp({Component, pageProps}) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js');
    require('@popperjs/core/dist/cjs/popper.js');
  }, []);
  return <>
    <Menu />
    <Component {...pageProps} />
  </>;
}

export default MyApp;
