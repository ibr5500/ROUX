const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (req, res) => {
    const artwork = await speakersService.getAllArtwork();
    const speakers = await speakersService.getList();
    res.render('layout', { pageTitle: 'Speakers', template: 'speakers', speakers, artwork });
  });
  router.get('/:shotname', async (req, res) => {
    const speaker = await speakersService.getSpeaker(req.params.shotname);
    const artwork = await speakersService.getArtworkForSpeaker(req.params.shotname);
    res.render('layout', { pageTitle: 'Speakers', template: 'speaker-details', speaker, artwork });
  });

  return router;
};
