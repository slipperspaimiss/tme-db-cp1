const { type } = require("express/lib/response");

let MYSQL_CONFIG={};


MYSQL_CONFIG={

    //--




/** 
* Paste one or more documents here
*/

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
        "text": {type:String}
    },
    "_etag": {
        "$oid": {type:String}
    }


    //---
  }
module.exports={
    MYSQL_CONFIG
}
