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
  let rs= await mongoadd.createmo(tmeobject,mgskey);
  console.log('----------------')
  if(rs){
    console.log('suseesful-------------------')
  }else{
    console.log('失败----------------------------')
  }
  const chatId = req.body.message.chat.id

     //1收到纯消息
     if(req.body.message.text){
     const text = req.body.message.text
  
     await axios.post(`${TELEGRAM_API}/sendMessage`, {
         chat_id: chatId,
         text: text
     })
    
    return res.send()
    }else if(req.message.photo){
     let Array=req.message.photo;
  let photo=Array[1];
  await axios.Axios.post(`${TELEGRAM_API}/sendMessage`,{
       chat_id: chatId,
       text: photo.file_id,
       method: 'sendPhoto'
  })
  return res.send()

    }
    else{
      await axios.post(`${TELEGRAM_API}/sendMessage`,{
        chat_id: chatId,
        text: '我不能理解你说什么呢'
      })
      return res.send()

    }
    //2收到图片


    //3收到文件
  })

module.exports = router