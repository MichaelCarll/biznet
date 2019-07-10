module.exports=function(Sequelize,DataTypes){
    var User = Sequelize.define('User',{
        email: DataTypes.STRING,
        password: DataTypes.STRING
    })
    return User
}