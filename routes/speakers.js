const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (req, res, next) => {
    try {
      const artwork = await speakersService.getAllArtwork();
      const speakers = await speakersService.getList();
      return res.render('layout', {
        pageTitle: 'Speakers',
        template: 'speakers',
        speakers,
        artwork,
      });
    } catch (err) {
      return next(err);
    }
  });
  router.get('/:shotname', async (req, res, next) => {
    try {
      const speaker = await speakersService.getSpeaker(req.params.shotname);
      const artwork = await speakersService.getArtworkForSpeaker(req.params.shotname);
      return res.render('layout', {
        pageTitle: 'Speakers',
        template: 'speaker-details',
        speaker,
        artwork,
      });
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
