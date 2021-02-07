const {
    listSoupKitchens,
    getSoupKitchen,
    getReviewList,
    postReview
} = require('../controllers/soup_kitchen');

const router = require('express').Router();

router.get('/show_soup_kitchens', listSoupKitchens);

router.get('/:get_soup_kitchen', getSoupKitchen);

router.get('/review_list', getReviewList);

router.post('/post_review', postReview);

module.exports = router;