const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;
  router.get('/', async (req, res) => {
    const speakers = await speakersService.getList();
    return res.json(speakers);
  });

  router.get('/:shotname', (req, res) => res.send(`Details page of ${req.params.shotname}`));

  return router;
};
