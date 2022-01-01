const express = require('express');
require('dotenv').config()
const router = express.Router();
const axios=require('axios')
const { TOKEN, SERVER_URL } = process.env

const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`
router.post('/', async (req, res) => {
    console.log(req.body)
  
    const chatId = req.body.message.chat.id
     const text = req.body.message.text
  
     await axios.post(`${TELEGRAM_API}/sendMessage`, {
         chat_id: chatId,
         text: text
     })
    
    return res.send()
  })

module.exports = router