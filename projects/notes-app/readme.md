# Aplicación de Notas con NodeJS + MongoDB

## Módulos de NodeJS instalados
* bcryptjs: para encriptar las contraseñas a guardar en la base de datos
* connect-flash
* express
* express-handlebars
* express-session
* method-override: para que los formularios puedan realizar otras acciones además de POST
* mongoose: para poder interactuar con la base de datos de MongoDB
* nodemon -D: para relanzar el servidor al actualizar el proyecto.
* passport
* passport-local

## MongoDB
Es necesario correr primero el comando ```mongod``` para poder conectarse a la base de datos, y luego correr 
nuestra aplicación con ```node src/index.js```