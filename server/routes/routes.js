const express = require('express');
const passport = require('passport');
const router = express.Router();
 
router.get('/test', (req, res) => {
  res.json("");
})

router.post('/login',
  passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: 'Invalid username or password.',
    successFlash: 'Welcome!'
                                   
}));

module.exports = router;