// load libraries
const express = require('express')
const handlebars = require ('express-handlebars')

//configure environment
const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000

//create an instance of express
const app = express()

//configure handlebars
app.engine('hbs', 
    handlebars({ defaultLayout: 'default.hbs' })
)
app.set('view engine', 'hbs')

app.get('/images',
    (req, res) => {
    res.status(200)
    res.type('text/html')
    res.render

    }
)

//configure the application
app.use(
    express.static(__dirname + '/public')
)

//start the server
app.listen(PORT, () => {
    console.info(`App started on port ${PORT}`)
})