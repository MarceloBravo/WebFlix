/**
 * @fileoverview Servidor principal de WebFlix - Plataforma de streaming de videos
 * @requires express
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/**
 * @route GET /
 * @description Endpoint principal que verifica el acceso mediante una clave secreta
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @returns {string} Mensaje de bienvenida o acceso denegado según la presencia de SECRET_KEY
 */
app.get('/', (req, res) => {
    msg = process.env.SECRET_KEY ? 'Bienvenido a WebFlix, tu servidor de videos': 'Esta es WebFlix, pero no tienes acceso a nuestra web no cocnoces la clave secreta'
    res.send(msg);
});

if (require.main === module) {
  app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));
}

module.exports = app;
