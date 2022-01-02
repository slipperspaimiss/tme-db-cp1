const res = require('express/lib/response')
const mongoose=require('mongoose')
//const { MYSQL_CONFIG }=require('../configq/db')
//连接
const db=mongoose.createConnection('mongodb://node:123456@www.edgyyds.store:27017/node',{
useNewUrlParser:true,useUnifiedTopology:true},err=>{
if(err){
console.log('数据库连接失败',err)
return
}

console.log('连接成功')
})
const model=db.model('logobje',{
    
    "update_id":{type:Number},
    "message": {
        "message_id": {type:Number},
        "from": {
            "id": {type:Number},
            "is_bot": {type:Boolean},
            "first_name": {type:String},
            "last_name": {type:String},
            "username": {type:String},
            "language_code": {type:String}
        },
        "chat": {
            "id": {type:Number},
            "title": {type:String},
            "username": {type:String},
            "type": {type:String}
        },
        "date": {type:Number},
        any:Object
        
    },
    "_etag": {
        "$oid": {type:String}
    }


})


const createmo=postData=>{
    const insertObject=new model(postData)

     return insertObject.save()
     .then(res=>{
         console.log('res',res)
         return res
        })
     .catch(err=>{
         console.log('err',err)
         return false
        })
}


//2列表
const findlist=(skipu,limitu)=>{
    

     return model.find().skip(skipu).limit(limitu)
     .then(res=>{
         console.log('res',res)
         return res
        })
     .catch(err=>{
         console.log('err',err)
         return []
        })
}



module.exports={
createmo,
findlist

}