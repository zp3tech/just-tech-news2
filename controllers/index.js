const router = require('express').Router();
 
router.use('/api', require('./api'));

router.use('/', require('./home-routes'));

router.use('/dashboard', require('./dashboard-routes'));

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
