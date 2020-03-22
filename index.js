const express = require('express')

const app = express()

app.get('/teste', (req, res) => {
    return res.json({ hello: 'world 2'})
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3333')
})

