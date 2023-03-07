const express = require('express')
const {medicaments, produit} = require('../controllers/authentification')

const router = express.Router()

/// /////////////////////////////////////

router.get('/medicaments', medicaments)
router.get('/produit', produit)

module.exports = router
