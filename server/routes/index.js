const router = require('express').Router();

const soup_kitchen = require('./soup_kitchen');

router.use('/soup_kitchen', soup_kitchen);

//Test for communications
router.get('/hello', (req, res) => {
  try {
    return res.status(200).json({ message: 'Hello there!' });
  }catch(error) {
    return res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = router;
