const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8800;
app.use(bodyParser.json());
let users = []
let counter = 1
app.get('/users', (req, res) => {
  res.json(users);
})
app.post('/user', (req, res) => {
  let user = req.body;
  user.id = counter
  counter += 1
  users.push(user);
  res.json({
    message: 'Data has been added',
    user: user
  })
})
app.put('/user/:id', (req, res) => {
  let id = req.params.id;
  let updateUser = req.body;
  let selectedIndex = users.findIndex(user => user.id == id)
  if (updateUser.firstname){
  users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
  }
  if (updateUser.lastname){
  users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname
  }
  res.json({
    message: 'Data has been updated',
    data: {
      user: updateUser,
      indexUpdate: selectedIndex
    }
  });
})
app.delete('/user/:id', (req, res) => {
  let id = req.params.id;
  let selectedIndex = users.findIndex(user => user.id == id)
  users.splice(selectedIndex, 1)
  res.json({
    message: "Delete Completed",
    indexDeleted: selectedIndex
  });
})
app.listen(port, (req, res) => {
  console.log('Server is running on port' + port);
});