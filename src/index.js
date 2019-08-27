const express = require('express');
require('./db/mongoose');
const taskRouter = require('./routers/task');
const userRouter = require('./routers/user');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
})