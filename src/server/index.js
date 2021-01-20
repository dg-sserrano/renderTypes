import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import App from '../client/App.jsx'

const app = express()

app.use('/dist',express.static('dist'))

app.get('/', (req, res) => {
  const html = ReactDOM.renderToString(
    <html>
      <head>
        <title>Server Side Rendering</title>
      </head>
      <body>
        <div id="root"><App /></div>
        <script type="module" src="./dist/main.js"></script>
      </body>
    </html>
  )
  res.send(html)
})

app.listen(3000, (err) => {
  if (err) console.log(err.message)
  else console.log('Server run in http://localhost:3000/')
})