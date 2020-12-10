const express = require('express')


const app = express()

app.get('/', (request, response) => {
  response.end("<h1>Welcome to  Docker Containers!!!</h1><h2>This is NodeJS Application</h2>")
})


app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})