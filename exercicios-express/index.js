const express = require('express');
const app = express();

const saudacao = require('./saudacaoMid')

app.use(saudacao('Guilherme'))

app.use((req, res, next) => {
    console.log('Antes')

    next();
});

app.get('/opa', (req, res, next) => {
    console.log('Durante')

    res.json({
        data: [
            {id: 7, name: 'Ana', position:1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()
    // res.json([
    //     {id: 7, name: 'Ana', position:1},
    //     {id: 34, name: 'Bia', position: 2},
    //     {id: 73, name: 'Carlos', position: 3}
    // ])

    // res.json({
    //     name: 'ipad 32Gb',
    //     preco: 1899,
    //     discount: 0.12
    // })

    // res.send('<h1>Estou bem</h1><br></br><p>Teste</p>')
});

app.post('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', function(parte) {
        corpo += parte 
    })
    req.on('end', function() {
        res.send(corpo)
    })
})

app.get('/clientes/:id', (req, res) => {
    res.send(`CLiente ${req.params.id} selecionado! `)
})

app.use((req, res) => {
    console.log('Depois')
});

app.listen(8080, () => {
    console.log('Backend executando...')
});
