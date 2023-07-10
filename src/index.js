const express = require('express')

const app = express();

app.use(express.json())

/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar (Atualizar) uma informação no servidor
 * PATCH - Alterar uma informação específica
 * DELETE - Deletar uma informação no servidor
 */

/**
 * 
 * req - request
 * res - response
 */

/**
 * Tipos de parâmetros
 * 
 * Route Params => Identificar um recurso para poder editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body Params => Objetos para inserção/alteração de algum recurso (JSON)
 */
app.get("/courses", (req, res) => {
    const query = req.query
    console.log(query)
    return res.json(["Curso 1", "curso 2", "curso 3"])
})

app.post("/courses", (req, res) => {
    const body = req.body
    console.log(body)
    return res.json(body)
})

app.put("/courses/:id", (req, res) => {
    const { id } = req.params;
    console.log('PARAMS ', id)
    return res.json(["Curso 6", "curso 2", "curso 3"])
})

app.patch("/courses/:id", (req, res) => {
    return res.json(["Curso 1", "curso 20", "curso 3"])
})

app.delete("/courses/:id", (req, res) => {
    return res.json(["Curso 1", "curso 2"])
})

// app.get("/", (request, response) => {
//     const message = {
//         messageBody: 'E ai meu - minha patrao(a)',
//         text: 'Fundamentos Node JS',
//         newText: 'De boa ?',
//     }
//     return response.json(message)
// })

app.listen(3333)