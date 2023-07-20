const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/api/users', async(req, res) => {

    try {
        // response é a resposta do Axios mas podemos remover o data de dentro do respose
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')

        return res.json(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen('3000')