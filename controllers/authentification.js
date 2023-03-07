/* eslint-disable camelcase */
const {connect} = require('../model/index')

// MEDICAMENTS

exports.medicaments = (req, res) => {
  connect.getConnection(err => {
    if (err) {
      console.error(`Une erreur detectée : ${err}`)
    } else {
      console.log('Connecté à la base de données MySQL')
    }
  })
  connect.query(
    'SELECT * FROM produits INNER JOIN structures ON produits.marketed_by=structures.adresse_id',
    (err, result) => {
      res.send(result)
    },
  )
}

exports.produit = (req, res) => {
  connect.getConnection(err => {
    if (err) {
      console.error(`Une erreur detectée : ${err}`)
    } else {
      console.log('Connecté à la base de données MySQL')
    }
  })
  connect.query('SELECT * FROM produits, structures', (err, result) => {
    res.send(result)
  })
}
