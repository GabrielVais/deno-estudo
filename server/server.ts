import Application from "https://deno.land/x/oak/mod.ts";
import routes from 'routes';

const port = 5000;

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods())


console.log(`Server running in port ${port}`);

await app.listen({ port });