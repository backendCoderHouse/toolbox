# Technical Choice Fullstack Toolbox 
# Cristian Ríos (https://linkedin.com/in/christian-rios-dev)

Este proyecto consiste en una aplicación web fullstack desarrollada con Node Js y React, la cual consume una API externa para mostrar datos de archivos con formato .CSV. 

Estos archivos son filtrados según los requisitos solicitados en el desafío y luego disponibilizados para su descarga en el frontend de la app.


## Corriendo la aplicación

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

### `docker compose build`

- Una vez generados los contenedores, correr el comando

### `docker compose up`

- Esto inicia 3 contenedores :

   * expressapp (Servidor de Backend Node. JS)
   * reactapp   (Aplicación del lado del cliente)
   * nginx (utilizado como proxy reverso )

- Abrir el navegador web de su preferencia, y escribir en la barra de navegación la palabra   
  
  localhost

Se deberá visualizar la aplicación de react. Para consultar los métodos de la API de Node Js, diríjase a este documento, en la sección API.

Para detener los contenedores, utilize la combinación de teclas CTRL+C en windows y Linux , Command+. en MAC OS.  



Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

