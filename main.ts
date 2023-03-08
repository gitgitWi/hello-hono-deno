import { serve } from 'http/server.ts';
import { Hono } from 'hono/mod.ts';
import { logger } from 'hono/middleware.ts';

const server = new Hono();

server.use('*', logger());
server.get('/:some/:what', (ctx) => {
  const { some, what } = ctx.req.param();
  return ctx.json({ some, what });
});

serve(server.fetch);
