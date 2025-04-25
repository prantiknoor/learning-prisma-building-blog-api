import express from "express";
import morgan from "morgan";
import router from "./api/v1/router.js";

const app = express();

app.use([
  morgan('dev'),
  express.json()
])

app.use(router);

app.use((err, _req, res, _next) => {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    status: statusCode,
    message: err.message,
    errors: err.errors
  })
})

app.get('/health', (_req, res) => {
  res.json({
    status: 200,
    message: 'OK'
  });
});

app.use((req, res, _next) => {
  res.status(404).json({
    status: 404,
    message: "Not found",
  })
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});