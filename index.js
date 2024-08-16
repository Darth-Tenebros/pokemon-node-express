const express = require('express');
const app = express();
app.use(express.json());
const router = require('./routes/routes');
const swagger = require('./swagger');
const port = process.env.PORT || 3000;

const pokemon = require('./models/pokemon.model')




app.use('/', router);
// app.get('/pokemon/:id', pokemon.getByID);

swagger(app);

app.listen(port, () => {
    console.log(`SERVER IS LISTENING ON ${port}`)
});