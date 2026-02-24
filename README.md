

# Proyecto de web de CRYPTEDCLOUD

Este es el codigo fuente de la pagina web https://cryptedcloud.netlify.app

**EN ESTE PROYECTO SE HAN UTILIZADO LOS SIGUIENTES LENGUAJES**
   - TypeScript (Lenguaje principal para cada apartado)
   - JSON
   - HTML
   - CSS

Esta pagina funciona gracias a NODE

para hacer funcionar esta pagina de forma local necesitamos instalar NODE en nuestro equipo, esto va a variar segun el sistema utilizdo 

   - Windows

**IMPORTANTE EN WINDOWS, EJECUTAD LA TERMINAL MODO ADMINISTRADOR, O SI NO A LA HORA DE HACER INSTALACIONES CON NPM NO FUNCIONARAN**

Para instalar NODE en windows es recomendable descargarlo desde su pagina oficial y seguir los pasos de instalación, enlace a la pagina de node (https://nodejs.org/es/download)

Una vez ya instalado debemos ejecutar la terminal y ubicarnos en el directorio del proyecto, una vez dentro debemos de ejecutar el siguiente comando. 
```bash
npm install
```
Una vez terminado el primer proceso hemos seguir el siguiente paso para montar la pagina y asi crear el directorio dist

```bash
npm run build
```
Si queremos lanzar la pagina de manera local para ver cambios etc, hemos de instalar un servidor ligero con npm, nos dirijimos a la terminal y ejecutamos lo siguiente.

```bash
npm install -g serve
```
Cuando ya tengamos el servidor ligero instalado lo unico que debemos hacer es

```bash
serve -s dist
```
y nuestro proyecto estara corriendo actualmente

- Linux

En linux el proceso es mas sencillo, antes de empezar es importante que tengamos instalado NODE con npm en linux si no lo teneis ejecutad el siguiente comando:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```
seguidamente hemos de ejecutar este comando (si no te funciona prueba a cerrar la terminal y vuelve a iniciarla)
```bash
nvm install 24
```
y actualmente ya tendremos Node instalado.

Lo siguiente es dirigirnos al directorio del proyecto y ejecutar el comando npm install

```bash
npm install
```
una vez instalado hay que hacer un build

```bash
npm run build
```
Ahora si queremos ejecutar la pagina de forma local es igual en todas las plataformas, nos dirigimos a la terminal y ejecutamos 

```bash
npm install -g serve
```
una vez instalado el servidor ligero hemos de lanzarlo 

```bash
serve -s dist
```
Actualmente estaria corriendo localmente y en la red domestica (LAN)
