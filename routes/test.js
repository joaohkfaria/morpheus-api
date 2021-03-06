import express from 'express';
import NLUController from '../controllers/NLUController';
import ToneAnalyzer from '../controllers/ToneAnalyzer';
import TwitterController from '../controllers/TwitterController';

// Setting up environment
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // const text = 'Como acabar com a cracolândia?';
  // const ta = new ToneAnalyzer();
  // ta.translateAndAnalyze(text)
  //   .then(response => res.json(response))
  //   .catch(err => res.json(err));
  const tc = new TwitterController();
  tc.searchNews('cracolandia', 20)
    .then((tweets) => {
      console.log(tweets);
      const fTweets = tweets.statuses.map(tweet => tweet.text);
      res.json(tweets.statuses);
    })
    .catch(err => res.json(err));
});

module.exports = router;
