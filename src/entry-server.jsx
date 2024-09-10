import React from 'react'
import ReactDOMServer from 'react-dom/server';
import Doc from './Doc'

export function render() {
  const html = ReactDOMServer.renderToPipeableStream(<Doc />);
  return {html}
}
