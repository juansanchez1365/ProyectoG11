const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");

exports.crearUsuario = async (req, res) => {

    //console.log(req.body);
    //res.json({msg:"desde controller post"})

    const{password, email} = req.body;

    try{

        let usuario = await Usuario.findOne({email});

        if(usuario){

            return res.status(400).json({msg: "el usuario ya existe"})
        }

        // Crear usuario
        usuario = new Usuario(req.body);

        usuario.password = await bcryptjs.hash(password, 10);

        //Guardar usuario en DB
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);

    }catch(error){
        console.log(error);

    }

};