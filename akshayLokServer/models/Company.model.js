const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name : {
            type : String
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