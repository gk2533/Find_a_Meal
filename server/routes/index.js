const router = require('express').Router();

//Test for communications
router.get('/hello', (req, res) => {
  try {
    return res.status(200).json({ message: 'Hello there!' });
  }catch(error) {
    return res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = router;
