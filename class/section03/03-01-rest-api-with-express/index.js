// const express = require('express') // 옛날방식 => commonjs
import express from 'express' // 요즘방식 => module

const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})