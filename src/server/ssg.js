import React from 'react'
import ReactDOM from 'react-dom/server'
import fs from 'fs'

import App from '../client/App.jsx'

const html = ReactDOM.renderToString(
  <html>
    <head>
      <title>Server Side Rendering</title>
    </head>
    <body>
      <div id="root"><App /></div>
      <script type="module" src="/dist/main.js"></script>
    </body>
  </html>
)
fs.writeFileSync('dist/index.html', html)
