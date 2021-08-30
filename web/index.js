'use strict'
require('dotenv').config();
const fastify = require('fastify')({logger: true});
const fs = require('fs').promises;
const fsN = require('fs');

fastify.get('/', async (_req, reply) => {
    const buffer = await fs.readFile('./content/view.html');
    reply.type('text/html');
    reply.send(buffer);
});

fastify.post('/save', (req, reply) => {
    reply.send({ result: 'Writing' });
    fs.writeFile('../content.txt', req.body.data);
});

fastify.get('/load', async (_req, reply) => {
    if(!fsN.existsSync('../content.txt')) await fs.writeFile('../content.txt', '');
    reply.send({ data: (await fs.readFile('../content.txt')).toString() });
});
fastify.listen(process.env.PORT ?? 8080);
