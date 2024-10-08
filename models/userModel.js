module.exports = (Sequelize, sequelize, DataTyes) =>{
    return sequelize.define('user', {
        ...require('./cors')(Sequelize, DataTyes),
        name: {
            type: DataTyes.STRING(255),
            allowNull: false
        },

        email: {
            type: DataTyes.STRING(255),
            allowNull: false
        },

        gender: {
            type: DataTyes.STRING(255),
            allowNull: false
        },

        age:{
            type: DataTyes.INTEGER,
            allowNull: false
        }
    },{
        tableName: 'user'
    })
}