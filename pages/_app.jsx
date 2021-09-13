import Head from 'next/head';
import PropTypes from 'prop-types';

import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

MyApp.defaultProps = {
  pageProps: {},
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any),
};

export default MyApp;
