const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
const mysql = require('mysql2/promise');
app.use(bodyParser.json());
let users = []
let conn = null
/*
GET /users สำหรับ get users ทั้งหมด
POST /users สำหรับ create user ใหม่บันทึกเข้าไป
GET /users/:id สำหรับ get user รายคนที่ต้องการดู
PUT /users/:id สำหรับ update user รายคนที่ต้องการบันทึกเข้าไป
DELETE /users/:id สำหรับ delete user รายคนที่ต้องการลบออก
*/
const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'webdb',
    port: 8830
  })
}
app.get('/testdb', (req, res) => {
  mysql. createConnection({
  host: 'localhost',
  user:'root',
  password: 'root',
  database: 'webdb',
  port: 8830
  }) . then((conn) => {
  conn
  . query ( 'SELECT * FROM users' )
  .then ((results) => {
  res. json(results[0])
  })
  .catch((error) => {
  console.log('Error fetching users:', error.message)
  res.status(500).json({error: 'Error fetching users' })
  })
  })
})
app.get('/testdb-new', async (req, res) => {
  try {
    const result = await conn.query('SELECT * FROM users')
    res.json(result[0])
  }catch (error) {
    console.log('Error fetching users: ', error.message)
    res.status(500).json({error: 'Error fetching users'})
  }
})


// path = GET /users สำหรับ get users ทั้งหมด
app.get('/users', async(req, res) => {
  const results = await conn.query('SELECT * FROM users')
  res. json(results[0])
  
  })
  
  // path = POST /users สำหรับ create user ใหม่บันทึกเข้าไป
  app.post('/users', async(req, res) => {
  let user = req.body;
  const results = await conn.query('INSERT INTO users SET ?', user)
  console.log('results', results)
  res.json({
  message: "User created",
  data: results[0]
  });
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
  // หา index ของ user ที่ต้องการลบ
  let selectedIndex = users.findIndex(user => user.id == id)
  users.splice(selectedIndex, 1)
  res.json({
    message: "Delete Completed",
    indexDeleted: selectedIndex
  });
})
app.listen(port, async(req, res) => {
  await initMySQL()
  console.log('Server is running on port' + port);
});