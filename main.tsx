/** @jsx jsx */
import { serve } from 'http/server.ts';
import { Hono } from 'hono/mod.ts';
import { logger, jsx, html, serveStatic, compress } from 'hono/middleware.ts';

const Layout = (props: { title: string; children?: any }) => html`
  <!DOCTYPE html>
    <h1>${props.title}</h1>
    ${props.children}
  </html>
`;

const server = new Hono();

server.use('*', logger(), compress());
server.get('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));
server.get('/', (ctx) => {
  return ctx.html(
    <Layout title="adfasdf23r23">
      <h3>serverTime: {new Date().toLocaleString('sv')}</h3>
    </Layout>
  );
});

server.get('/:some/:what', (ctx) => {
  const { some, what } = ctx.req.param();
  return ctx.json({ some, what });
});

serve(server.fetch);
