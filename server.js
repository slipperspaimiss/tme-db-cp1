require('dotenv').config()
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')


const domept=require('./routes/toget')
const { TOKEN, SERVER_URL } = process.env
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`
const URI = `/${TOKEN}`
const WEBHOOK_URL = SERVER_URL + URI

const app = express()
app.use(bodyParser.json())

const init = async () => {
    
    const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
    console.log(res.data)
}

app.use(URI,domept)
app.listen(process.env.PORT , async () => {
    console.log('🚀 app running on port', process.env.PORT)
    await init()
})