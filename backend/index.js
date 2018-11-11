const express = require('express');
const GenerationEngine = require('./generationEngine');

const app = express();

const generationEngine = new GenerationEngine();
const port = 3000;

generationEngine.start();

app.get('/dragon/new', (req, res) => {
  res.json({ dragon: generationEngine.generation.newDragon() });
});

app.listen(port, () => console.log(`Listening on port ${port}`));