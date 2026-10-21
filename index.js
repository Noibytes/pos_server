const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Use default middlewares (cors, static, logger)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Mount router
server.use(router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`POS JSON Server is running on port ${PORT}`);
  console.log(`Base URL: http://localhost:${PORT}`);
  console.log(`Resources:`);
  console.log(`  - http://localhost:${PORT}/products`);
  console.log(`  - http://localhost:${PORT}/categories`);
  console.log(`  - http://localhost:${PORT}/customers`);
  console.log(`  - http://localhost:${PORT}/orders`);
  console.log(`  - http://localhost:${PORT}/expenses`);
  console.log(`  - http://localhost:${PORT}/staff`);
  console.log(`  - http://localhost:${PORT}/suppliers`);
  console.log(`  - http://localhost:${PORT}/transactions`);
  console.log(`========================================`);
});
