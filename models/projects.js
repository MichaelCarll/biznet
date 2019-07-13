module.exports=function(Sequelize,DataTypes){
    var Projects = Sequelize.define('projects',{
        Title: DataTypes.STRING,
        Description: DataTypes.STRING
    })
    return Projects;
}