import React from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';

import config from 'helmconfig.js';

const Meta = () => (
  <Helmet
    htmlAttributes={{"lang": "en", "amp": undefined}}
    title="aianash" meta={config.meta}
    link={config.link}
  />
)

ReactDOM.renderToString(<Meta />);
const header = Helmet.rewind();

export default header;