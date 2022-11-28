const mongoose = require("mongoose");
const conectarDB =  async () => {

    try{
        const connection = await mongoose.connect(
            "mongodb+srv://jsanchez:3214635095@cluster0.rdjlsyt.mongodb.net/?retryWrites=true&w=majority",{
                useNewUrlParser: true,
                UseUnifiedTopology: true,

        });

            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`Mongo DB conectado en : ${url}`);


    }catch (error){
        console.log(`error: ${error.message}`);
        process.exit(1);

    }

}
module.exports = conectarDB;