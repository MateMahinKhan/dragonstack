const GenerationEngine = require('./generationEngine');

const generationEngine = new GenerationEngine();

generationEngine.start();

setTimeout(() => {
  generationEngine.stop();
}, 20000);

// console.log( 'generation', generationEngine);

// const gooby = generation.newDragon();

// console.log('gooby', gooby);