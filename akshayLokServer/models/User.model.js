const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name : {
            type : String
        },
        
        email : {
            type : String
        },

        password : {
            type : String,
            default: null
        },

        google:{
            type: String,
            default: null
        },

        role : {
            type: String,
            default : null
        },
        
        company : {
            type: String,
            default : null
        },

        transactions:{
            type: Array,
            default: []
        }
    },  
    {
      timestamps: true,
    }
  );
  
  const UserModel = mongoose.model("User", UserSchema);
  module.exports = UserModel;