module.exports=function(Sequelize,DataTypes){
    var Projects = Sequelize.define('project',{
        Title: DataTypes.String,
        Description: DataTypes.String
    })
    return Projects;
}