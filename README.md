<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripcion


## Install

```bash
$ npm install
```

## ejecucion del proyecto
Se  recomienda  uso  de  postman para las  pruebas
Operaciones CRUD
Ingreso de un  usuario  o  registro
</p>
POST
</p>
https://pruebatecnicakamaytech-production-0ffc.up.railway.app/users/users
</p>
```bash
{
   "name": "dani",
    "email": "daniel@gmail.com",
    
    "age": 25,
   
    "password":"123"
}
```
##Login Usuario
</p>
POST
</p>
https://pruebatecnicakamaytech-production-0ffc.up.railway.app/users/auth/login
</p>
```bash
{
  "email": "mariaa@gmail.com",

    "password":"123"
}
```
El proceso  de login genera  un token el token  generado de  debe  ser ingresado  en bearer token en caso  de postman para   realizar las  siguientes pruebas
example
```bash
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjYxZDA3ZDYyODk1ZjhmZjI0ZjA3MiIsIm5hbWUiOiJhYmVsIiwiaWF0IjoxNzIzMjI3Njk4LCJleHAiOjE3MjMyOTk2OTh9._y5UQ3rEm2ZBXg2XDAtKColYbrXhkXbxZntKTcYtTgE"
```

Actualizacion  de Usuario
PUT
https://pruebatecnicakamaytech-production-0ffc.up.railway.app/users/user/66b5bf2b83cb301716c41e10

```bash
{
   "name": "abel",
  
    "email": "daniel@gmail.com",
    
    "age": 25,
   
    "password":"123"
}
```
Mostrar todos  los usuarios
GET
https://pruebatecnicakamaytech-production-0ffc.up.railway.app/users/users

Buscar  por  id 
GET
https://pruebatecnicakamaytech-production-0ffc.up.railway.app/users/user/66b5bf2b83cb301716c41e10

Eliminar el usuario
DELETE
https://pruebatecnicakamaytech-production-0ffc.up.railway.app
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
