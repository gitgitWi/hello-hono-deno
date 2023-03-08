import { serve } from 'http/server.ts';
import { Hono } from 'hono/mod.ts';
import { logger, serveStatic, compress } from 'hono/middleware.ts';

const server = new Hono();

server.use('*', logger(), compress());
server.get('/', serveStatic({ path: './index.html' }));
server.use('/public/*', serveStatic({ root: './' }));
server.get('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));

server.get('/:some/:what', (ctx) => {
  const { some, what } = ctx.req.param();
  return ctx.json({ some, what });
});

serve(server.fetch);
