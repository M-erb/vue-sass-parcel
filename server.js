const express = require('express')
const app = express()

app.use('/', express.static(__dirname))

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

app.listen(3000);
console.log('Server Started, listening on port 3000')
console.log('visit: http://localhost:3000')