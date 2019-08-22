const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.MONGODB_CONNECT_PATH}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

