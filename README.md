# Technical Choice Fullstack Toolbox 
## Cristian Ríos 

Este proyecto consiste en una aplicación web fullstack desarrollada con Node Js y React, la cual consume una API externa para mostrar datos de archivos con formato .CSV. 

Estos archivos son filtrados según los requisitos solicitados en el desafío,  y luego disponibilizados para su descarga en el frontend de la app.


## Desplegar la aplicación

Para ejecutar esta aplicación, puede optar por utilizar Docker o correrlo directamente en su equipo.

## 1 - Método Docker

Requisitos técnicos :
- Contar con GIT instalado (https://git-scm.com/downloads)
- Contar con Docker instalado  (https://www.docker.com/)
- Iniciar Docker

Procedimiento:

- En una terminal, Clonar el repositorio mediante el comando 
### `git clone https://github.com/backendCoderHouse/toolbox`

- Dirigirse a la carpeta raíz del proyecto con el comando 
### `cd toolbox`

- Ejecutar el comando 

### `docker compose up`

- Esto inicia 3 contenedores :

   * expressapp (Servidor de Backend Node. JS)
   * reactapp   (Aplicación del lado del cliente)
   * nginx (utilizado como proxy reverso )

- Abrir el navegador web de su preferencia, y escribir en la barra de navegación la palabra   
  
  localhost

Se deberá visualizar la aplicación de react. Para consultar los métodos de la API de Node Js, diríjase a este documento, en la sección API.

Para detener los contenedores, utilize la combinación de teclas CTRL+C en windows y Linux , Command+. en MAC OS.  

## 2 - Método con comandos de NPM

Requisitos técnicos :
- Contar con GIT instalado (https://git-scm.com/downloads)
- Contar con Node js instalado  (https://nodejs.org/es)

Procedimiento:

- En una terminal, Clonar el repositorio mediante el comando 
### `git clone https://github.com/backendCoderHouse/toolbox`

- Para iniciar el servidor de la API , dirigirse a la carpeta 'server' del proyecto y correr el comando  
### `npm start`

- Para correr la aplicación de React, mediante la terminal , dirigirse al directorio 'client' del repositorio y correr el comando  

### `npm start`


Esto abrirá su navegador web en la url  [http://localhost:3000](http://localhost:3000) .

## 2 - Métodos de la API

A continuación, se detallan los endpoints de la API con los que se puede interactuar:

(Los ejemplos a continuación consideran la API corriendo en Docker, de lo contrario se debe agregar el puerto 8080 = http://localhost:8080/api/files/... )

Método GET 'http://localhost/api/files/list' Devuelve la lista de los archivos disponibles,

Ejemplo de respuesta : 

{
  "files": [
    "test1.csv",
    "test2.csv",
    "test3.csv",
    "test18.csv",
    "test4.csv",
    "test5.csv",
    "test6.csv",
    "test9.csv",
    "test15.csv"
  ]
}

Método GET 'http://localhost/api/files/data' Devuelve la lista de los archivos con los datos formateados, según lo solicitado en el challenge.

Ejemplo de respuesta : 

[
  {
    "file": "test1.csv",
    "lines": [
      
    ]
  },
  {
    "file": "test2.csv",
    "lines": [
      {
        "text": "KLSVSauDBejCpYQFE",
        "number": "74283",
        "hex": "53d4ee197247602fe34b3d814511b344"
      }
    ]
  },
]


## Testing de endpoints 

Para correr el test de la API, se debe correr el comando npm run test, con el backend corriendo y desde la terminal en el directorio 'server'.

Los endpoints testeados son  GET /api/files/data ,  GET /api/files/list y el filtrado por query param  GET /api/files?filename=   

# Capturas de pantalla de la aplicación

![View](https://user-images.githubusercontent.com/70445507/235569137-d9b0be4b-a3f3-40b1-afff-1296ffc857f4.png)

![list](https://user-images.githubusercontent.com/70445507/235569207-5e299bfb-fa64-4ded-96fb-d42a12237cbf.png)

![data](https://user-images.githubusercontent.com/70445507/235569234-8ec2f854-db6b-42a0-befd-3739ce03d259.png)

![Toolbox ‐ Hecho con Clipchamp](https://user-images.githubusercontent.com/70445507/235571127-5f586106-4d85-469d-8312-61a524dc10e2.gif)

# Gracias por tomarse el tiempo de revisar el challenge !


