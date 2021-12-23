const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const msg = process.env.MSG || 'Hello World!'
app.get('*', (req, res) => {
  res.send(msg)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})