const express = require("express");
const app = express();
const PORT = 3000;
//esta funcion wappinit por defecto inicializa el whatsapp y la trivia juntas luego separar 
const wappinit = require('./apis/apiwhatsapp/wp');

wappinit();


app.get('/',(req, res) => res.send("Buenas"));

app.get('/admin', (req, res) => {
    res.sendFile('C:/Facultad Materia 2 año 2 Cuatriestre/BotGame/1-Frontend/private/Admin.html');
});


app.get('/index', (req, res) => {
    
    res.sendFile('C:/Facultad Materia 2 año 2 Cuatriestre/BotGame/1-Frontend/public/index.html');
    
    // Iniciar la aplicación y la API de WhatsApp aquí
    // Puedes llamar a tu función wappinit() desde aquí.
});

app.listen(PORT, ()=> console.log(`Servidor Funcionando en el puerto: ${PORT}`));
