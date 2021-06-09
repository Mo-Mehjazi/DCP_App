module.exports = {
    port: process.env.PORT || 8081,
    db: { //Sequelizer Config
        database: process.env.DB_NAME || 'tabtracker', //ENV Var für 
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite', //what type of database you will connect to
            host: process.env.HOST || 'Localhost', //what location of the host to connect to
            storage: './tabtracker.sqlite' //Where to store the data
        }
    }
}
