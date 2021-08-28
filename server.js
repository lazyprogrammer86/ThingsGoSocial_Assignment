const express = require('express')
const app = express();
const port = 3000 || process.env.PORT

app.use(express.json())
app.use('/', require('./routes'))
app.use((req, res) => {
    res.status(400).send("Please check the URL you have entered")
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Listening on port ${port}`)
})