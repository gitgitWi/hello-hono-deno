import { serve } from 'https://deno.land/std@0.178.0/http/server.ts';
import { Hono } from 'https://deno.land/x/hono@v3.0.2/mod.ts';
import { logger, serveStatic, compress } from 'https://deno.land/x/hono@v3.0.2/middleware.ts';

const server = new Hono();

server.use('*', logger(), compress());
server.get('/', serveStatic({ path: './dist/index.html' }));
server.get(
  '/assets/*',
  (ctx, next) => {
    ctx.header('Cache-Control', 'public, max-age=47250000');
    return next();
  },
  serveStatic({ root: './dist/' })
);

serve(server.fetch);
