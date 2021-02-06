const pool = require('../db');

const listSoupKitchens = async(req, res) => {
    try {
        return res.status(200).json({message: 'Listing soup kitchens'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Failed to list soup kitchens'});
    }
}

const getSoupKitchen = async(req, res) => {
    try {
        return res.status(200).json({message: 'Showing soup kitchen'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Failed to show soup kitchen'});
    }
}

const getReviewList = async(req, res) => {
    try {
        return res.status(200).json({message: 'Listing reviews'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Failed to list reviews'});
    }
}

const postReview = async(req, res) => {
    try {
        return res.status(200).json({message: 'Posted review'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Failed to post your review'});
    }
}

module.exports = {
    listSoupKitchens,
    getSoupKitchen,
    getReviewList,
    postReview
};