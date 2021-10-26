const fs = require('fs');
const path = require("path");
const usuariosFilePath = path.join(__dirname, "../data/usuarios.json");


let userController = {

    index: function(req, res) {
        res.render('index');
    
    },
    register: function(req, res) {
        res.render('register');
    
    },
    create: function(req, res) {
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));
        let usuarioToCreate = {};
        usuarioToCreate.nombre = req.body.nombre;
        usuarioToCreate.email = req.body.email;
        usuarios.push(usuarioToCreate);
        let usuariosJSON = JSON.stringify(usuarios, null, 2);
        fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'),usuariosJSON); 
        res.redirect('/users');
    },

    update: function(req, res){
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));
        let usuario;

        for (let i= 0; i < usuarios.length; i++){
            if (usuarios[i].correo == req.body.email){
                usuario[i].nombre = req.body.nombre;
            }
        }
        let usuariosJSON = JSON.stringify(usuarios, null, 2);
        fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'),usuariosJSON); 
        res.redirect('/users');

    }


};

module.exports = userController;