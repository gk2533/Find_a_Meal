const pool = require('../db');

const listSoupKitchens = async(req, res) => {
    try {
        const soup_kitchens = await pool.query(
            'SELECT id, name, cumulative_rate, location FROM soup_kitchen'
        );
        
        const resp = [];
        meetings.rows.forEach((obj) => {
            resp.push({
                id: obj.id,
                name: obj.name,
                cumulative_rate: obj.location
            });
        });
        
        return res.status(200).json({message: 'Listing soup kitchens'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Failed to list soup kitchens'});
    }
}

const getSoupKitchen = async(req, res) => {
    try {
        const soup_kitchen_id = req.body;
        const soup_kitchen = await pool.query(
            'SELECT name, cumulative_rate, picture_url, location FROM soup_kitchen WHERE id = $1', [soup_kitchen_id]
        );
        
        const resp = {
            name: soup_kitchen.rows[0].name,
            cumulative_rate: soup_kitchen.rows[0].cumulative_rate,
            picture_url: soup_kitchen.rows[0].picture_url,
            location: soup_kitchen.rows[0].location
        };
        return res.status(200).json(resp);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Failed to show soup kitchen'});
    }
}

const getReviewList = async(req, res) => {
    try {
        const soup_kitchen_id = req.body;
        const reviewList = await pool.query(
            'SELECT review_text, individual_rate FROM soup_kitchen, review WHERE $1 = review.soup_kitchen_id', [soup_kitchen_id]
        );
        
        const resp = [];
        reviewList.rows.forEach((obj) => {
            resp.push({
                review_text: obj.review_text,
                individual_rate: obj.individual_rate
            });
        });
        
        return res.status(200).json(resp);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Failed to list reviews'});
    }
}

const postReview = async(req, res) => {
    try {
        const { soup_kitchen_id, text, rate } = req.body;
        posting = await pool.query(
            'INSERT INTO review (soup_kitchen_id, review_text, individual_rate) VALUES ($1, $2, $3)', [soup_kitchen_id, text, rate]
        );
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