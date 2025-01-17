const express = require('express');
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./middlewares/error-handler.middleware')

const app = express();

app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(router);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
