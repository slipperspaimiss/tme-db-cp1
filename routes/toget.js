const express = require('express');
require('dotenv').config()
const router = express.Router();
const axios=require('axios')
const { TOKEN, SERVER_URL } = process.env
const mongoadd=require('../mgdemo/connectq')

const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`
router.post('/', async (req, res) => {
    console.log(req.body)
    var fdata=req.body;
//更新schema
  var tmeobject=new Object(fdata)
  var getmsg=tmeobject['message']
  var readmsg=Object.keys(getmsg)
  var mgskey=readmsg[4]
  tmeobject.markModified=mgskey;



console.log('mgskey');
console.log(tmeobject);

    //保存日志
  let rs= await mongoadd.createmo(tmeobject);
  console.log('----------------')
  if(rs){
    console.log('suseesful-------------------')
  }else{
    console.log('失败----------------------------')
  }
    const chatId = req.body.message.chat.id
     const text = req.body.message.text
  
     await axios.post(`${TELEGRAM_API}/sendMessage`, {
         chat_id: chatId,
         text: text
     })
    
    return res.send()
  })

module.exports = router