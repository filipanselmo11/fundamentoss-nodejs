const express = require('express')

const app = express();


app.get("/", (request, response) => {
    const message = {
        messageBody: 'E ai meu patrao(a)',
        text: 'Fundamentos Node JS',
        newText: 'De boa ?',
    }
    return response.json(message)
})

app.listen(3333)