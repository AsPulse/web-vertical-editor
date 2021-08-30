'use strict'

const fastify = require('fastify')();
const fs = require('fs').promises;

fastify.get('/', async (_req, reply) => {
    const buffer = await fs.readFile('./content/view.html');
    reply.type('text/html');
    reply.send(buffer);
});

fastify.listen(8080);
