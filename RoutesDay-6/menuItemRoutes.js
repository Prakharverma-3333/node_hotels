const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');


router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'INternal Server error' });
  }

})


module.exports = router;