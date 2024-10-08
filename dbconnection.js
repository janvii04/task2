

const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD, {
        host: process.env.DATABASE_HOST,
        dialect: 'mysql'
    }
);
const connectiondb = async()=>{
    await sequelize.authenticate()
    .then(()=>{
 sequelize.sync({extended:true});
 console.log('DB CONNECTED AND SYNC'); 
}).catch((err)=>{
        console.log(err) 
})
}
module.exports={
    sequelize:sequelize,
    connectiondb:connectiondb
}
