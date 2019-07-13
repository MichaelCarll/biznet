var bcrypt = require("bcrypt")
module.exports=(Sequelize,DataTypes)=>{
    var User = Sequelize.define("User",{
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
    User.hashPassword=(password)=>{
        return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
    }
    User.comparePassword=(password,hash)=>{
      return bcrypt.compareSync(password,hash)
    }
    return User
}