const express = require('express');
const sequelize = require('./app/config/connection');
const routes = require('./app/routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('app/public'));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function() {
      console.log('App listening on PORT ' + PORT);
    });
  });