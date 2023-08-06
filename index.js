const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const productRouter = require('./routes/Products')
app.set('views', __dirname + '/templates/views')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render("home", { name: "World!", 'users': [
        { name: 'Justin Workman!', email: 'jworkman@ByteLengthQueuingStrategy.com' },
        { name: 'shelby Workman!', email: 'jworkman@ByteLengthQueuingStrategy.com' },
        { name: 'John Workman!', email: 'jworkman@ByteLengthQueuingStrategy.com' }
    ] })
})

app.use("/products", productRouter)

app.listen(3000)
