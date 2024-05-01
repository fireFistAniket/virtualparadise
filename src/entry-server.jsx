import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export function render(req) {
  console.log(req);
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={req} basename="/virtualparadise">
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  return { html };
}
