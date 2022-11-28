const jwt = require("jsonwebtoken");

module.exports = function (req, res, next){
    //Leer token desde header 
    const token = req.header("x-auth-token");
    //console.log(token);

    //Revisar existencia de token 

    if(!token){
        return res.status(400).json({msg: "no hay token"});

    }

    //Validar token

    try{

        const cifrado = jwt.verify(token, process.env.SECRETA)
        req.usuario = cifrado.usuario;
        //console.log(cifrado.usuario);
        next();

    }catch(error){
        res.status(400).json({msg:"Token no valido"})
    }
}