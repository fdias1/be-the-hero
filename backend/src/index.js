/** 
 * Backend da aplicação Be The Hero, desenvolvida na semana oministack
*/

const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const port = 3333

 
const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port)
console.log(`server listening port ${port} and ready to rock!`)
