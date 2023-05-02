# Technical Choice Fullstack Toolbox 
# Cristian Ríos 

<p>Descripción : Este proyecto consiste en una aplicación web fullstack desarrollada con Node Js y React, la cual consume una API externa para mostrar datos de archivos con formato .CSV.</p>

<p>Estos archivos son filtrados según los requisitos solicitados en el desafío,  y luego disponibilizados para su descarga en el frontend de la app.</p>

<h5> Link a la aplicación desplegada : https://toolboxclient-production.up.railway.app/ </h5>

## Desplegar la aplicación

<p>Para ejecutar esta aplicación, puede optar por utilizar Docker o correrlo directamente en su equipo.</p>

<small>Nota: Para correr la aplicación sin docker, consulte la documentación a continuación del Backend y del frontend respecto de sus requisitos previos. </small>

<h2>1 - Método Docker</h2>

<p>Requisitos técnicos :</p>

<ul>
<li>Contar con GIT instalado (https://git-scm.com/downloads)</li>
<li>Contar con Docker instalado  (https://www.docker.com/)</li>
<li>Iniciar Docker</li>
</ul>

<p>Procedimiento:</p>

<ol>
<li>En una terminal, Clonar el repositorio mediante el comando </li>
<code>git clone https://github.com/backendCoderHouse/toolbox</code>
<li>Dirigirse a la carpeta raíz del proyecto con el comando </li>
<code>cd toolbox</code>
<li>Ejecutar el comando </li>

<code>docker compose up --build</code>
<li>Esto inicia 3 contenedores :</li>
   <ul>
   <li>expressapp (Servidor de Backend Node. JS)</li>
   <li>reactapp   (Aplicación del lado del cliente)</li>
   <li>nginx (utilizado como proxy reverso )</li>
   </ul>
<li>Abrir el navegador web de su preferencia, y escribir en la barra de navegación la palabra 'localhost'</li>
</ol>

<p>Se deberá visualizar la aplicación de react. Para consultar los métodos de la API de Node Js, diríjase a este documento, en la sección API.</p>

<p>Para detener los contenedores, utilize la combinación de teclas CTRL+C en windows y Linux , Command+. en MAC OS.  </p>

<h2>2 - Método con comandos de NPM</h2>

<p>Requisitos técnicos :</p>

<ul>
<li>Contar con GIT instalado (https://git-scm.com/downloads)</li>
<li>Contar con Node js instalado  (https://nodejs.org/es)</li>
</ul>

<p>Procedimiento:</p>

<ol>
<li>En una terminal, Clonar el repositorio mediante el comando </li>
<code>git clone https://github.com/backendCoderHouse/toolbox</code>
<li>Para iniciar el servidor de la API , dirigirse a la carpeta 'server' del proyecto y correr los comandos  </li>
<code>npm install</code>
<code>npm start</code>
<p>Nota : deberá contar con la versión 14 de Node js, dado que es uno de los requerimientos del challenge, que funcione bajo una versión específica de Node</p>
<li>Para correr la aplicación de React, mediante la terminal , dirigirse al directorio 'client' del repositorio y correr los comandos  </li>
<code>npm install</code>
<code>npm start</code>
</ol>
<p>Nota : deberá contar con la versión 16 de Node js, dado que es uno de los requerimientos del challenge, que funcione bajo una versión específica de Node</p>
<p>Esto abrirá su navegador web en la url  <a href="http://localhost:3000">http://localhost:3000</a>.</p>

<h2>- Métodos de la API</h2>

<p>A continuación, se detallan los endpoints de la API con los que se puede interactuar:</p>



(Los ejemplos a continuación consideran la API corriendo en Docker, de lo contrario se debe agregar el puerto 8080 = http://localhost:8080/api/files/... )

<p> Nota : puede interactuar con la API desplegada en internet, mediante la siguiente url: https://toolboxapi-production.up.railway.app/api/files/[endpoint a probar] </p>

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

Los endpoints testeados son  GET /api/files/data ,  GET /api/files/list y el filtrado por query param  GET /api/files/data?filename=   

# Capturas de pantalla de la aplicación

![View](https://user-images.githubusercontent.com/70445507/235569137-d9b0be4b-a3f3-40b1-afff-1296ffc857f4.png)

![list](https://user-images.githubusercontent.com/70445507/235569207-5e299bfb-fa64-4ded-96fb-d42a12237cbf.png)

![data](https://user-images.githubusercontent.com/70445507/235569234-8ec2f854-db6b-42a0-befd-3739ce03d259.png)

![Toolbox ‐ Hecho con Clipchamp](https://user-images.githubusercontent.com/70445507/235571127-5f586106-4d85-469d-8312-61a524dc10e2.gif)




