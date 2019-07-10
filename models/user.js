var bcrypt = require("bcrypt")
module.exports=(Sequelize,DataTypes)=>{
    var User = Sequelize.define('User',{
        Email:{
            type:DataTypes.STRING,
            required:true,
            unique:true,
        },
        password:{
            type:DataTypes.STRING,
            required:true,
        },
    })
    User.hashPassword=function(password){
        return bcrypt.hashSync(password,bcrypt.genSaltSync(19840))
    }
    User.comparePassword=function(password,hash){
      return bcrypt.compareSync(password,hash)
    }
    return User
}