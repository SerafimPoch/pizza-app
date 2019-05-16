const express = require('express');
const router = express.Router();


router.get('/ninjas', (req,res) => {
  res.send({type: 'GET'})
})

router.post('/ninjas', (req,res) => {
  console.log(req.body)
  res.send({
    type: 'POST',
    username: req.body, 
    password: req.body.rank
  })
})

router.put ('/ninjas/:id', (req,res) => {
  res.send({type: 'PUT'})
})

router.delete('/ninjas/:id', (req,res) => {
  res.send({type: 'DELETE'})
})

module.exports = router;