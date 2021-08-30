'use strict'

const fastify = require('fastify')()

fastify.get('/', function (req, reply) {
    reply.send("This is main page");
});

fastify.listen(8080);