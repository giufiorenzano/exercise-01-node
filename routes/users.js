var express = require('express');
var router = express.Router();
var app = express();
app.use(express.json());

let users = { items: []}

router.get('/', function(req, res, next) {
  res.send(users.items);
});

router.post('/', function(req, res, next) {
  users.items.push(req.body)
  res.send('OK!')
});;

router.delete('/delete/:email', (req, res) => {
  const { email } = req.params

  res.send(`${email} deleted`)
})

module.exports = router;
