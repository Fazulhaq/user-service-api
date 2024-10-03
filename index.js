const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json([
        {
            'firstName': "Ahamd",
            'lastName': "Khan"
        },
        {
            'firstName': "Mohammad",
            'lastName': "Jan"
        },
        {
            'firstName': "Karim",
            'lastName': "Rahimi"
        },
        {
            'firstName': "Gul",
            'lastName': "Khan"
        },
    ])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})