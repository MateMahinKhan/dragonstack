const { Router } = require('express');

const router = new Rpsouter();

router.get('/', (req, res) => {
  res.json({ generation: req.app.locals. engine.generation });
});

module.exports = router;