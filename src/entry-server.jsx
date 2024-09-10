import React from 'react'
import ReactDOMServer from 'react-dom/server';
import Doc from './Doc'

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Doc />
    </React.StrictMode>
  );
  return { html }
}
