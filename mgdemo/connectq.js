const res = require('express/lib/response')
const mongoose=require('mongoose')

//连接
const db=mongoose.createConnection('mongodb://node:123456@localhost:27017/node',{
useNewUrlParser:true,useUnifiedTopology:true},err=>{
if(err){
console.log('数据库连接失败',err)
return
}

console.log('连接成功')
})
const model=db.model('logqs',{
    uname:{type:String},
    age:{type:Number}
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