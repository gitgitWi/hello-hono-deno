import { serve } from 'http/server.ts';
import { Hono } from 'hono/mod.ts';
import { logger, serveStatic, compress } from 'hono/middleware.ts';

const server = new Hono();

server.use('*', logger(), compress());
server.get('/', serveStatic({ path: './index.html' }));
server.get(
  '/public/*',
  (ctx, next) => {
    ctx.header('Cache-Control', 'public, max-age=47250000');
    return next();
  },
  serveStatic({ root: './' })
);

serve(server.fetch);
