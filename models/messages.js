module.exports=(Sequelize,DataTypes)=>{
    var message = Sequelize.define('message',{
        body:{
            type:DataTypes.STRING,
            required:true,
        },
    })
    return message;
}