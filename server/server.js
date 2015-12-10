import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || process.env.port || 5000;

const server = app.listen(port, () => console.log(`server listen on ${port} port`));

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../assets')));
app.use(express.static(path.join(__dirname, '../node_modules/phaser/build')));

// error handlers
app.use((error, req, res, next) => res.send(error));
